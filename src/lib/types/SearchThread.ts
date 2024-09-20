import type { Message } from './Message.ts';
import type { ApiResponse } from './ApiResponse.ts';

export interface SearchThread {
	session: string | null;
    messages: Message[];
    currentResultsSetKey: string | null;
    responses: {
        [key: string]: ApiResponse;
    },
    status: 'idle' | 'pending' | 'success' | 'error',
    error: string | null;
};