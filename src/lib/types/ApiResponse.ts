import type { AllowedLanguages } from './AllowedLanguages.ts';
import type { Filter } from './Filter.ts';
import type { Selection } from './Selection.ts';

export interface ApiResponse {
	session: string;
	l: AllowedLanguages;
    message: string;
    filters: Filter[];
    selection: Selection[];
};

export interface ApiDeleteResponse {
    code?: number | string;
    message: string;
};