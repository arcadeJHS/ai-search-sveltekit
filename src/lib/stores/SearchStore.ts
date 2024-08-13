import { writable, get } from 'svelte/store';
import type { SearchStartRequest } from '$lib/types/SearchStartRequest.ts';
import type { SearchStartResponse } from '$lib/types/SearchStartResponse.ts';
import type { SearchThread } from '$lib/types/SearchThread.ts';
import { type Message, MessageRole } from '$lib/types/Message.ts';
import type { SearchMessageRequest } from '$lib/types/SearchMessageRequest.ts';
import type { SearchMessageResponse } from '$lib/types/SearchMessageResponse.ts';

const _searchStart = async (apiBaseUrl: string, { language = 'en' }: SearchStartRequest): Promise<SearchStartResponse> => {
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

const _searchMessage = async (apiBaseUrl: string, { session, message }: SearchMessageRequest): Promise<SearchMessageResponse> => {
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

	const _searchStore = writable<SearchThread>({
		session: null,
		l: null,
		messages: [],
		filters: [],
		selections: []
	});

	return {
		subscribe: _searchStore.subscribe,
		set: _searchStore.set,
		update: _searchStore.update,
        start: async (apiBaseUrl: string, { language }: SearchStartRequest): Promise<SearchStartResponse> => {
			if (!apiBaseUrl) {
				throw new Error('apiBaseUrl is required');
			}

			BASE_URL = apiBaseUrl;

            const response: SearchStartResponse = await _searchStart(BASE_URL, {
				language 
			});
			const { session, l, message, filters, selection } = response;
			const chatMessage: Message = {
				role: MessageRole.Agent,
				content: message
			};
			
			_searchStore.update((self: SearchThread) => {
				self.session = session;
				self.l = l;
				self.messages = [...self.messages, chatMessage];
				self.filters = filters;
				self.selections = selection;
				return self;
			});

			return response;
		},
		addMessage: (message: Message) => {
			_searchStore.update((self: SearchThread) => {
				self.messages = [...self.messages, message];
				return self;
			});
		},
		search: async (userMessage: string): Promise<SearchMessageResponse> => {
			const store = get(_searchStore);
			const session = store.session;

			if (!session) {
				throw new Error('Session is required');
			}
			
			const response: SearchMessageResponse = await _searchMessage(BASE_URL, {
				session: session, 
				message: userMessage
			});

			const { l, message, filters, selection } = response;
			const chatMessage: Message = {
				role: MessageRole.Agent,
				content: message
			};

			_searchStore.update((self: SearchThread) => {
				self.l = l;
				self.messages = [...self.messages, chatMessage];
				self.filters = filters;
				self.selections = selection;
				return self;
			});

			return response;
		}
	};
};

export const searchStore = useSearch();