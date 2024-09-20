import type { Message } from './Message.ts';
import type { ApiResponse } from './ApiResponse.ts';

export interface SearchThread {
	session: string | null;
    messages: Message[];
    isSearching: boolean;
    currentResultsSetKey: string | null;

    responses: {
        [key: string]: ApiResponse;
    }
};