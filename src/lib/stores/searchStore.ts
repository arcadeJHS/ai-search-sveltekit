import { writable, get } from 'svelte/store';
import type { SearchStartRequest } from '$lib/types/SearchStartRequest.ts';
import type { ApiResponse } from '$lib/types/ApiResponse.ts';
import type { SearchThread } from '$lib/types/SearchThread.ts';
import { type Message, type AgentMessage, type UserMessage, MessageRole } from '$lib/types/Message.ts';
import type { SearchMessageRequest } from '$lib/types/SearchMessageRequest.ts';
import type { AllowedLanguages } from '$lib/types/AllowedLanguages.ts';
import { UUID } from '$lib/utils/UUID.ts';

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

    try {
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`Server error: ${data.error}`);
        }
        return data;
    } catch (error) {
        throw new Error(`Server error: ${error}`);
    }
};

const _searchStart = async (apiBaseUrl: string, { language = 'en' }: SearchStartRequest): Promise<ApiResponse> => {
    let url = `${apiBaseUrl}/search/start`;
    const queryParams = new URLSearchParams();
    if (language) queryParams.append('l', language);
    if (queryParams.toString()) {
        url += `?${queryParams.toString()}`;
    }

    return await fetchJson(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

const _searchMessage = async (apiBaseUrl: string, { session, message }: SearchMessageRequest): Promise<ApiResponse> => {
    const url = `${apiBaseUrl}/search/message/${session}`;

    return await fetchJson(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    });
};

export const useSearch = () => {
    let BASE_URL: string;
    let LANGUAGE: AllowedLanguages;

    const _searchStore = writable<SearchThread>(emptySearchThread());

    const setStarting = () => {
        _searchStore.update((self: SearchThread) => ({
            ...self,
            status: 'starting',
            error: null
        }));
    };

	const setSearching = () => {
        _searchStore.update((self: SearchThread) => ({
            ...self,
            status: 'searching',
            error: null
        }));
    };

    const setError = (error: Error) => {
        _searchStore.update((self: SearchThread) => ({
            ...self,
            status: 'error',
            error: error.message
        }));
    };

    const setAgentMessage = (content: string): AgentMessage => ({
        key: UUID(),
        role: MessageRole.Agent,
        content
    });

    const setUserMessage = (content: string): UserMessage => ({
        key: UUID(),
        role: MessageRole.User,
        content
    });

    const addMessage = (message: Message) => {
        _searchStore.update((self: SearchThread) => ({
            ...self,
            messages: [...self.messages, message]
        }));
    };

    const start = async (apiBaseUrl: string, { language }: SearchStartRequest): Promise<ApiResponse | undefined> => {
        if (!apiBaseUrl) {
            throw new Error('apiBaseUrl is required');
        }

        BASE_URL = apiBaseUrl;
        setStarting();

        try {
            const response: ApiResponse = await _searchStart(BASE_URL, { language });
            const { session, l, message } = response;
            const agentMessage: AgentMessage = setAgentMessage(message);

            LANGUAGE = l;

            _searchStore.update((self: SearchThread) => ({
                ...self,
                session,
                messages: [...self.messages, agentMessage],
                responses: {
                    ...self.responses,
                    [agentMessage.key]: response
                },
                status: 'success',
                error: null
            }));

            return response;
        } catch (error: unknown) {
            setError(error as Error);
        }
    };

    const reset = async (): Promise<ApiResponse | undefined> => {
        _searchStore.set(emptySearchThread());
        return await start(BASE_URL, { language: LANGUAGE });
    };

    const search = async (content: string): Promise<ApiResponse | undefined> => {
        const { session } = get(_searchStore);

        if (!session) {
            throw new Error('Session is required');
        }

        const userMessage = setUserMessage(content);
        addMessage(userMessage);

        _searchStore.update((self: SearchThread) => ({
            ...self,
            currentResultsSetKey: null
        }));

        setSearching();

        try {
            const response: ApiResponse = await _searchMessage(BASE_URL, { session, message: content });
            const { message } = response;
            const agentMessage: AgentMessage = setAgentMessage(message);
            const responseKey = userMessage.key;

            _searchStore.update((self: SearchThread) => ({
                ...self,
                messages: [...self.messages, agentMessage],
                responses: {
                    ...self.responses,
                    [responseKey]: response
                },
                currentResultsSetKey: responseKey,
                status: 'success',
                error: null
            }));

            return response;
        } catch (error: unknown) {
            setError(error as Error);
        }
    };

    const selectResultsSet = (key: string) => {
        _searchStore.update((self: SearchThread) => ({
            ...self,
            currentResultsSetKey: key
        }));
    };

    return {
        subscribe: _searchStore.subscribe,
        set: _searchStore.set,
        update: _searchStore.update,
        setStarting,
		setSearching,
        setError,
        start,
        reset,
        addMessage,
        setUserMessage,
        setAgentMessage,
        search,
        selectResultsSet
    };
};

export const searchStore = useSearch();