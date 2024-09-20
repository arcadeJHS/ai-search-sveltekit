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
		currentResultsSetKey: null,
		responses: {},
		status: 'idle',
		error: null
	};
};

const _searchStart = async (apiBaseUrl: string, { language = 'en' }: SearchStartRequest): Promise<ApiResponse> => {
	let url = `${apiBaseUrl}/search/start`;
	const queryParams = new URLSearchParams();
	if (language) queryParams.append('l', language);
	if (queryParams.toString()) {
		url += `?${queryParams.toString()}`;
	}

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	// check if response content-type is not application/json (PHP/DB errors)
	if (response.headers.get('content-type') !== 'application/json') {
		throw new TypeError(`Server error: Invalid response content-type - expected application/json, got ${response.headers.get('content-type')}`);
	}

	try {
		const data = await response.json();

		if (!response.ok) {
			throw new Error(`Server error: ${data.error}`);
		}

		return data;	
	} catch (error: unknown) {
		throw new Error(`Server error: ${error}`);
	}
};

const _searchMessage = async (apiBaseUrl: string, { session, message }: SearchMessageRequest): Promise<ApiResponse> => {
	const url = `${apiBaseUrl}/search/message/${session}`;

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			message
		})
	});

	// check if response content-type is not application/json (PHP/DB errors)
	if (response.headers.get('content-type') !== 'application/json') {
		throw new TypeError(`Server error: Invalid response content-type - expected application/json, got ${response.headers.get('content-type')}`);
	}

	try {
		const data = await response.json();

		if (!response.ok) {
			throw new Error(`Server error: ${data.error}`);
		}

		return data;	
	} catch (error: unknown) {
		throw new Error(`Server error: ${error}`);
	}
};

export const useSearch = () => {
	let BASE_URL: string;
	let LANGUAGE: AllowedLanguages;

	const _searchStore = writable<SearchThread>(emptySearchThread());

	const _methods = {
		subscribe: _searchStore.subscribe,
		set: _searchStore.set,
		update: _searchStore.update,
		setPending: () => {
			_searchStore.update((self: SearchThread) => ({
				...self,
				status: 'pending',
				error: null
			}));
		},
		setError: (error: Error) => {
			_searchStore.update((self: SearchThread) => ({
				...self,
				status: 'error',
				error: error.message
			}));
		},
        start: async (apiBaseUrl: string, { language }: SearchStartRequest): Promise<ApiResponse | undefined> => {
			if (!apiBaseUrl) {
				throw new Error('apiBaseUrl is required');
			}

			BASE_URL = apiBaseUrl;

			_methods.setPending();

			try {
				const response: ApiResponse = await _searchStart(BASE_URL, { language });
				const { session, l, message } = response;
				const agentMessage: AgentMessage = _methods.setAgentMessage(message);

				LANGUAGE = l;
				
				_searchStore.update((self: SearchThread) => ({
					...self,
					session: session,
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
				_methods.setError(error as Error);
			}
		},
		reset: async (): Promise<ApiResponse | undefined> => {
			_searchStore.set(emptySearchThread());
			return await _methods.start(BASE_URL, { language: LANGUAGE });
		},
		addMessage: (message: Message) => {
			_searchStore.update((self: SearchThread) => ({
				...self, 
				messages: [...self.messages, message]
			}));
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
		search: async (content: string): Promise<ApiResponse | undefined> => {
			const store = get(_searchStore);
			const session = store.session;

			if (!session) {
				throw new Error('Session is required');
			}

			const userMessage = _methods.setUserMessage(content);
			
			_methods.addMessage(userMessage);

			_searchStore.update((self: SearchThread) => ({
				...self, 
				currentResultsSetKey: null
			}));

			_methods.setPending();
			
			try {
				const response: ApiResponse = await _searchMessage(BASE_URL, {
					session: session, 
					message: content
				});
				const { message } = response;
				const agentMessage: AgentMessage = _methods.setAgentMessage(message);
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
				_methods.setError(error as Error);
			}
		},
		selectResultsSet: (key: string) => {
			_searchStore.update((self: SearchThread) => ({
				...self,
				currentResultsSetKey: key
			}));
		}
	};

	return _methods;
};

export const searchStore = useSearch();