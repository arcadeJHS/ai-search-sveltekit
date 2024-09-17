import type { AllowedLanguages } from './AllowedLanguages.ts';
import type { Filter } from './Filter.ts';
import type { Selection } from './Selection.ts';
import type { Message } from './Message.ts';

export interface SearchThread {
	session: string | null;
	l: AllowedLanguages | null;
    messages: Message[];
    filters: Filter[];
    selections: Selection[];
    isSearching: boolean;
};