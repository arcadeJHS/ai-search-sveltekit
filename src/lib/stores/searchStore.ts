import { writable, get } from 'svelte/store';
import type { SearchStartRequest } from '$lib/types/SearchStartRequest.ts';
import type { ApiResponse } from '$lib/types/ApiResponse.ts';
import type { SearchThread } from '$lib/types/SearchThread.ts';
import { type Message, type AgentMessage, type UserMessage, MessageRole } from '$lib/types/Message.ts';
import type { SearchMessageRequest } from '$lib/types/SearchMessageRequest.ts';
import type { AllowedLanguages } from '$lib/types/AllowedLanguages.ts';
import { UUID } from '$lib/utils/UUID.ts';

const emptySearchThread = (): SearchThread => {
	return {
		session: null,
		messages: [],
		isSearching: false,
		currentResultsSetKey: null,
		responses: {}
	};
};

const _searchStart = async (apiBaseUrl: string, { language = 'en' }: SearchStartRequest): Promise<ApiResponse> => {
	let url = `${apiBaseUrl}/search/start`;
	
	const queryParams = new URLSearchParams();

	if (language) queryParams.append('l', language);

	if (queryParams.toString()) {
		url += `?${queryParams.toString()}`;
	}

	const res = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	return await res.json();
};

const _searchMessage = async (apiBaseUrl: string, { session, message }: SearchMessageRequest): Promise<ApiResponse> => {
	const url = `${apiBaseUrl}/search/message/${session}`;

	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			message
		})
	});

	return await res.json();
};

export const useSearch = () => {
	let BASE_URL: string;
	let LANGUAGE: AllowedLanguages;

	const _searchStore = writable<SearchThread>(emptySearchThread());

	const _methods = {
		subscribe: _searchStore.subscribe,
		set: _searchStore.set,
		update: _searchStore.update,
        start: async (apiBaseUrl: string, { language }: SearchStartRequest): Promise<ApiResponse> => {
			if (!apiBaseUrl) {
				throw new Error('apiBaseUrl is required');
			}

			BASE_URL = apiBaseUrl;

            const response: ApiResponse = await _searchStart(BASE_URL, { language });
			const { session, l, message } = response;
			const agentMessage: AgentMessage = _methods.setAgentMessage(message);

			LANGUAGE = l;
			
			_searchStore.update((self: SearchThread) => {
				self.session = session;
				self.messages = [...self.messages, agentMessage];
				self.responses[agentMessage.key] = response;
				return self;
			});

			return response;
		},
		reset: async (): Promise<ApiResponse> => {
			_searchStore.update(emptySearchThread);
			return await _methods.start(BASE_URL, { language: LANGUAGE });
		},
		addMessage: (message: Message) => {
			_searchStore.update((self: SearchThread) => {
				self.messages = [...self.messages, message];
				return self;
			});
		},
		setUserMessage: (content: string): UserMessage => {
			const message: UserMessage = {
				key: UUID(),
				role: MessageRole.User,
				content
			};
			return message;
		},
		setAgentMessage: (content: string): AgentMessage => {
			const message: AgentMessage = {
				key: UUID(),
				role: MessageRole.Agent,
				content
			};
			return message;
		},
		search: async (content: string): Promise<ApiResponse> => {
			const store = get(_searchStore);
			const session = store.session;

			if (!session) {
				throw new Error('Session is required');
			}

			const userMessage = _methods.setUserMessage(content);
			_methods.addMessage(userMessage);

			_searchStore.update((self: SearchThread) => {
				self.currentResultsSetKey = null;
				self.isSearching = true;
				return self;
			});
			
			const response: ApiResponse = await _searchMessage(BASE_URL, {
				session: session, 
				message: content
			});
			const { message } = response;
			const agentMessage: AgentMessage = _methods.setAgentMessage(message);
			const responseKey = userMessage.key;

			_searchStore.update((self: SearchThread) => {
				self.messages = [...self.messages, agentMessage];
				self.responses[responseKey] = response;
				self.currentResultsSetKey = responseKey;
				self.isSearching = false;
				return self;
			});

			return response;
		},
		selectResultsSet: (key: string) => {
			_searchStore.update((self: SearchThread) => {
				self.currentResultsSetKey = key;
				return self;
			});
		}
	};

	return _methods;
};

export const searchStore = useSearch();