import { writable } from 'svelte/store';
import { type SearchStartRequest } from '$lib/types/SearchStartRequest.ts';
import { type SearchStartResponse } from '$lib/types/SearchStartResponse.ts';

const startSearch = async ({ apiBaseUrl, language = 'en' }: SearchStartRequest) => {
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

export const useSearch = () => {	
	const { set, update, subscribe } = writable<SearchStartResponse>();

	return {
		subscribe,
		set,
		update,
        start: async ({ apiBaseUrl, language }: SearchStartRequest): Promise<SearchStartResponse> => {
			if (!apiBaseUrl) {
				throw new Error('apiBaseUrl is required');
			}

            const response = await startSearch({ apiBaseUrl, language });
			set(response);
			return response;
		}
	};
};

export const searchStore = useSearch();