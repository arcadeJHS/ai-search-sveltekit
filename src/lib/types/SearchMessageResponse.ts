import type { AllowedLanguages } from './AllowedLanguages.ts';
import type { Filter } from './Filter.ts';
import type { Selection } from './Selection.ts';

export interface SearchMessageResponse {
	l: AllowedLanguages;
    message: string;
    filters: Filter[];
    selection: Selection[];
};