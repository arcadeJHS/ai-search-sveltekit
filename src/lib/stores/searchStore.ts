import { writable, get } from 'svelte/store';
import type { SearchStartRequest } from '$lib/types/SearchStartRequest.ts';
import type { ApiResponse } from '$lib/types/ApiResponse.ts';
import type { SearchThread, SearchThreadStatus } from '$lib/types/SearchThread.ts';
import { type Message, type AgentMessage, type UserMessage, MessageRole } from '$lib/types/Message.ts';
import type { AllowedLanguages } from '$lib/types/AllowedLanguages.ts';
import { UUID } from '$lib/utils/UUID.ts';

const BASE_URL_KEY = 'BASE_URL';
const LANGUAGE_KEY = 'LANGUAGE';

const emptySearchThread = (): SearchThread => ({
    session: null,
    messages: [],
    currentResultsSetKey: null,
    responses: {},
    status: 'idle',
    error: null
});

const fetchJson = async (url: string, options: RequestInit): Promise<ApiResponse> => {
    const response = await fetch(url, options);
    if (response.headers.get('content-type') !== 'application/json') {
        throw new TypeError(`Server error: Invalid response content-type - expected application/json, got ${response.headers.get('content-type')}`);
    }
    const data = await response.json();
    if (!response.ok) {
        throw new Error(`Server error: ${data.error}`);
    }
    return data;
};

const createMessage = (role: MessageRole, content: string): Message => ({
    key: UUID(),
    role,
    content
});

const useSearch = () => {
    const store = writable<SearchThread & { [BASE_URL_KEY]: string, [LANGUAGE_KEY]: AllowedLanguages }>({
        ...emptySearchThread(),
        [BASE_URL_KEY]: '',
        [LANGUAGE_KEY]: 'en'
    });

    const updateStore = (updater: (state: SearchThread & { [BASE_URL_KEY]: string, [LANGUAGE_KEY]: AllowedLanguages }) => Partial<SearchThread & { [BASE_URL_KEY]: string, [LANGUAGE_KEY]: AllowedLanguages }>) => {
        store.update(state => ({ ...state, ...updater(state) }));
    };

    const setStatus = (status: SearchThreadStatus, error: string | null = null) => {
        updateStore(() => ({ status, error }));
    };

    const addMessage = (message: Message) => {
        updateStore(state => ({ messages: [...state.messages, message] }));
    };

    const apiCall = async (endpoint: string, method: 'GET' | 'POST', body?: object) => {
        const { [BASE_URL_KEY]: baseUrl } = get(store);
        const url = `${baseUrl}${endpoint}`;
        return await fetchJson(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: body ? JSON.stringify(body) : undefined
        });
    };

    const start = async ({ language }: SearchStartRequest): Promise<ApiResponse | undefined> => {
        const { [BASE_URL_KEY]: baseUrl } = get(store);
        if (!baseUrl) throw new Error('apiBaseUrl is required');

        setStatus('starting');
        try {
            const response: ApiResponse = await apiCall(`/search/start?l=${language}`, 'GET');
            const { session, l, message } = response;
            const agentMessage: AgentMessage = createMessage(MessageRole.Agent, message) as AgentMessage;

            updateStore(state => ({
                session,
                messages: [...state.messages, agentMessage],
                responses: { ...state.responses, [agentMessage.key]: response },
                status: 'idle',
                [LANGUAGE_KEY]: l
            }));

            return response;
        } catch (error) {
            setStatus('error', (error as Error).message);
        }
    };

    const search = async (content: string): Promise<ApiResponse | undefined> => {
        const { session } = get(store);
        if (!session) throw new Error('Session is required');

        const userMessage: UserMessage = createMessage(MessageRole.User, content) as UserMessage;
        addMessage(userMessage);
        updateStore(() => ({ currentResultsSetKey: null }));
        setStatus('searching');

        try {
            const response: ApiResponse = await apiCall(`/search/message/${session}`, 'POST', { message: content });
            const agentMessage: AgentMessage = createMessage(MessageRole.Agent, response.message) as AgentMessage;

            updateStore(state => ({
                messages: [...state.messages, agentMessage],
                responses: { ...state.responses, [userMessage.key]: response },
                currentResultsSetKey: userMessage.key,
                status: 'idle'
            }));

            return response;
        } catch (error) {
            setStatus('error', (error as Error).message);
        }
    };

    return {
        subscribe: store.subscribe,
        set: store.set,
        update: store.update,
        setBaseUrl: (url: string) => updateStore(() => ({ [BASE_URL_KEY]: url })),
        start,
        reset: async () => {
            const { [BASE_URL_KEY]: baseUrl, [LANGUAGE_KEY]: language } = get(store);
            store.set({ ...emptySearchThread(), [BASE_URL_KEY]: baseUrl, [LANGUAGE_KEY]: language });
            return await start({ language });
        },
        search,
        selectResultsSet: (key: string) => updateStore(() => ({ currentResultsSetKey: key }))
    };
};

export const searchStore = useSearch();