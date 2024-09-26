import type { Message } from './Message.ts';
import type { ApiResponse } from './ApiResponse.ts';

export type SearchThreadStatus = 'idle' | 'starting' | 'searching' | 'error' | 'ending';

export interface SearchThread {
	session: string | null;
    messages: Message[];
    currentResultsSetKey: string | null;
    responses: {
        [key: string]: ApiResponse & { query?: string };
    },
    status: SearchThreadStatus,
    error: string | null;
};