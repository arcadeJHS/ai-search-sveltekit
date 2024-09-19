import { writable, get } from 'svelte/store';
import type { SearchStartRequest } from '$lib/types/SearchStartRequest.ts';
import type { ApiResponse } from '$lib/types/ApiResponse.ts';
import type { SearchThread } from '$lib/types/SearchThread.ts';
import { type Message, type UserMessage, MessageRole } from '$lib/types/Message.ts';
import type { SearchMessageRequest } from '$lib/types/SearchMessageRequest.ts';
import type { AllowedLanguages } from '$lib/types/AllowedLanguages.ts';
import { UUID } from '$lib/utils/UUID.ts';

const emptyStore = (): SearchThread => {
	return {
		session: null,
		messages: [],
		isSearching: false,

		l: null,
		filters: [],
		selections: []
	};
}

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

	const _searchStore = writable<SearchThread>(emptyStore());

	const _methods = {
		subscribe: _searchStore.subscribe,
		set: _searchStore.set,
		update: _searchStore.update,
        start: async (apiBaseUrl: string, { language }: SearchStartRequest): Promise<ApiResponse> => {
			if (!apiBaseUrl) {
				throw new Error('apiBaseUrl is required');
			}

			BASE_URL = apiBaseUrl;

            const response: ApiResponse = await _searchStart(BASE_URL, {
				language 
			});
			const { session, l, message, filters, selection } = response;

			LANGUAGE = l;
			
			_searchStore.update((self: SearchThread) => {
				self.session = session;
				self.l = l;
				self.messages = [...self.messages, _methods.setAgentMessage(message)];
				self.filters = filters;
				self.selections = selection;
				return self;
			});

			return response;
		},
		reset: async () => {
			_searchStore.update(emptyStore);
			return await _methods.start(BASE_URL, { language: LANGUAGE });
		},
		addMessage: (message: Message) => {
			_searchStore.update((self: SearchThread) => {
				self.messages = [...self.messages, message];
				return self;
			});
		},
		addUserMessage: (content: string) => {
			const message: UserMessage = {
				key: UUID(),
				role: MessageRole.User,
				content
			};
			_methods.addMessage(message);
		},
		setAgentMessage: (content: string) => {
			const message: Message = {
				role: MessageRole.Agent,
				content
			};
			return message;
		},
		search: async (userMessage: string): Promise<ApiResponse> => {
			const store = get(_searchStore);
			const session = store.session;

			if (!session) {
				throw new Error('Session is required');
			}

			_searchStore.update((self: SearchThread) => {
				self.selections = [];
				self.isSearching = true;
				return self;
			});
			
			const response: ApiResponse = await _searchMessage(BASE_URL, {
				session: session, 
				message: userMessage
			});

			const { l, message, filters, selection } = response;

			_searchStore.update((self: SearchThread) => {
				self.l = l;
				self.messages = [...self.messages, _methods.setAgentMessage(message)];
				self.filters = filters;
				self.selections = selection;
				self.isSearching = false;
				return self;
			});

			return response;
		}
	};

	return _methods;
};

export const searchStore = useSearch();