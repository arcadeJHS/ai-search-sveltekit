import { type ArtistType, type ArtistSubType } from './Filter.ts';

export type Selection = {
    // LLM API core fields
	id: number;
	name: string;
    type: string;
    description: string;
    distance: number;

    // Stagend specific fields
    displayName?: string;
    aiQuoteAvg?: string | number;
    artistType?: ArtistType;
    bookings?: string | number;
    offer?: string;
    currency?: string;
    musician?: boolean;
    tagline?: string;
    ratingVotes?: string | number;
    ratingStars?: string | number;
    nickName?: string;
    userBookPlace?: string;
    city?: string;
    country?: string;
    subtypes?: ArtistSubType[];
    imageUrl?: string;
    whois?: string;
    videoYtId?: string;
    itemprop_desc?: string;
    cachet_min?: string;
};
