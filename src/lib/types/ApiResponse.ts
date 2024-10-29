import type { AllowedLanguages } from './AllowedLanguages.ts';
import type { Filter } from './Filter.ts';
import type { Selection } from './Selection.ts';

export interface ApiMessageResponse {
	session: string;
	l: AllowedLanguages;
    message: string;
    filters: Filter[];
    selection: Selection[];
};

export type ApiSearchResponse = ApiMessageResponse & { 
    additionalInfos?: {
        skippedIds?: number[]
    } 
};

export interface ApiDeleteResponse {
    code?: number | string;
    message: string;
};