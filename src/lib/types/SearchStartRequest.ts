import { type AllowedLanguages } from './AllowedLanguages.ts';

export type SearchStartRequest = {
	apiBaseUrl: string;
	language?: AllowedLanguages;
};