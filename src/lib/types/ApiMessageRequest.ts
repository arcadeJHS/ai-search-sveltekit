import { SearchableEntity } from '$lib/types/SearchableEntity.ts';

export interface MessageRequestInputParams {
    content: string;
    eventKm?: number;
    searchFor?: SearchableEntity;
};

export interface ApiMessageRequest {
	code?: string;
    message: string;
    eventKm: number;
};