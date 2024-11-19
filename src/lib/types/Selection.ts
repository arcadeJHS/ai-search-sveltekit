import { type ArtistLevel } from './ArtistLevel.ts';

export interface Budget {
    id: string | number;
    get_in: string;
    negotiable: boolean;
    proposal: string;
    length: string;
    members_formation: string | number;
    soundequip: boolean;
    c_when: string;
    cachet: string;
    stagend_fee: string | number;
    currency_id: string | number;
    currency: string;
};

export type Selection = {
    // LLM API core fields
	id: number;
	name: string;
    type: string;
    description: string;
    distance: number;

    // stg specific fields
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

    // Optional budgets info for given artist
    budgets?: Budget[]
};
