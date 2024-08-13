import { writable } from 'svelte/store';

export type SearchStartParams = {
	language?: 'it' | 'de' | 'fr' | 'en';
};

const PUBLIC_BACKEND_BASE_URL = 'http://localhost:8099';

const useSearch = () => {
	const _search = {};

	const { subscribe, set } = writable(_search);

	return {
		subscribe,
		set: (search: object) => set(search),
        start: async ({ language }: SearchStartParams = {}) => {
            const queryParams = new URLSearchParams();

            if (language) queryParams.append('l', language);

            let url = `${PUBLIC_BACKEND_BASE_URL}/search/start`;

            if (queryParams.toString()) {
                url += `?${queryParams.toString()}`;
              }

			const res = await fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const response = await res.json();
			return response;
		}
	};
};

export const search = useSearch();