import { type ArtistLevel } from './ArtistLevel.ts';

export type Selection = {
    // LLM API core fields
	id: number;
	name: string;
    type: string;
    description: string;
    distance: number;

    // Stagend specific fields
    displayName?: string;
    aiQuoteAvg?: number;
    artistType?: string;
    bookings?: number;
    offer?: string;
    currency?: string;
    musician?: boolean;
    tagline?: string;
    ratingVotes?: number;
    ratingStars?: number;
    nickName?: string;
    userBookPlace?: string;
    city?: string;
    country?: string;
    location?: string;
    subtypes?: string[];
    imageUrl?: string;
    whois?: string;
    videoYtId?: string;
    itemprop_desc?: string;
    cachet_min?: string;
    telephone: string;
    level_css: ArtistLevel;
};
