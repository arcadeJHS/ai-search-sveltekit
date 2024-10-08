import { register, init, t } from 'svelte-i18n';
import en from '../src/lib/i18n/en.json';
import { type FilterSuggestion, FilterType, type Filter } from '../src/lib/types/Filter';
import type { UserQuery } from '../src/lib/types/UserQuery.ts';
import { MessageRole } from '../src/lib/types/Message.ts';
import { type Selection } from '../src/lib/types/Selection';

export const appliedFiltersMock:Filter[] = [
    {
        f: FilterType.ARTIST_GENRE,
        k: 2,
        v: 'Rock',
        i: false
    },
    {
        f: FilterType.WHEN,
        k: '123',
        v: 'Today',
        i: false,
        p: ['2025-06-01', '2025-06-15']
    },
    {
        f: FilterType.ARTIST_SUB_TYPE,
        k: 1,
        v: 'Cover',
        i: false
    },
    {
        f: FilterType.LOCATION,
        k: '222',
        v: 'Lugano',
        i: false,
        p: ['46.0057', '8.9482']
    }
];

export const filtersSuggestionsMock: FilterSuggestion = {
    query: 'A rock band for a party in Lugano',
    applied: appliedFiltersMock,
    notApplied: [
        FilterType.ARTIST_TYPE,
        FilterType.WHEN,
        FilterType.ARTIST_SUB_TYPE,
        FilterType.LOCATION
    ],
    suggestions: {
        [FilterType.ARTIST_TYPE]: [1, 2, 3],
        [FilterType.WHEN]: ['suggestion'],
        [FilterType.ARTIST_SUB_TYPE]: [1,2,3],
        [FilterType.LOCATION]: ['zurich', 'lugano', 'geneva']
    }
};

export const userQueriesMock: UserQuery[] = [
    {
        key: '111',
        role: MessageRole.User,
        content: 'A rock band for a party in Lugano',
        resultsCount: 0
    },
    {
        key: '222',
        role: MessageRole.User,
        content: 'A jazz band for a party in Zurich',
        resultsCount: 1
    },
    {
        key: '333',
        role: MessageRole.User,
        content: 'A rock band for a party in Geneva',
        resultsCount: 10
    }
];

export const resultsMock: Selection[] = [
    {
        id: 1,
        name: "displayName 1",
        type: "type",
        description: "description",
        distance: 0.5000,
        displayName: "displayName",
        aiQuoteAvg: 1501,
        artistType: "Band",
        bookings: 1,
        offer: "Experienced members from famous acts like Coreleoni, UDO, Jorn, Gotthard playing a repertoire of classic Rock Metal from 70s and 80s (AC/DC, Led Zeppelin, Kiss, ecc...) with skills and passion that scores between rock and metal fans!",
        currency: "CHF",
        musician: true,
        tagline: "Classic Rock Band, covers and original tunes played on they're best",
        ratingVotes: 3,
        ratingStars: 10,
        nickName: "altovoltaggio",
        userBookPlace: "zürich",
        city: "Mezzovico-Vira",
        country: "CH",
        location: "Mezzovico-Vira, CH",
        subtypes: ["Big Band", "Cover", "Lounge"],
        imageUrl: "/thumb.png",
        whois: "youtube",
        videoYtId: "fj-V7UW6vD4",
        itemprop_desc: "Rock, Metal Classic Rock Classic Rock Band, covers and original tunes played on they're best",
        cachet_min: "500", 
        telephone: "+41791234567",
        level_css: "rockstar",
    },
    {
        id: 2,
        name: "displayName 2",
        type: "type",
        description: "description",
        distance: 0.5000,
        displayName: "displayName",
        aiQuoteAvg: 1501,
        artistType: "Band",
        bookings: 1,
        offer: "Experienced members from famous acts like Coreleoni, UDO, Jorn, Gotthard playing a repertoire of classic Rock Metal from 70s and 80s (AC/DC, Led Zeppelin, Kiss, ecc...) with skills and passion that scores between rock and metal fans!",
        currency: "CHF",
        musician: true,
        tagline: "Classic Rock Band, covers and original tunes played on they're best",
        ratingVotes: 3,
        ratingStars: 10,
        nickName: "altovoltaggio",
        userBookPlace: "zürich",
        city: "Mezzovico-Vira",
        country: "CH",
        location: "Mezzovico-Vira, CH",
        subtypes: ["Big Band", "Cover", "Lounge"],
        imageUrl: "/thumb.png",
        whois: "youtube",
        videoYtId: "fj-V7UW6vD4",
        itemprop_desc: "Rock, Metal Classic Rock Classic Rock Band, covers and original tunes played on they're best",
        cachet_min: "500", 
        telephone: "+41791234567",
        level_css: "rockstar",
    },
    {
        id: 3,
        name: "displayName 3",
        type: "type",
        description: "description",
        distance: 0.5000,
        displayName: "displayName",
        aiQuoteAvg: 1501,
        artistType: "Band",
        bookings: 1,
        offer: "Experienced members from famous acts like Coreleoni, UDO, Jorn, Gotthard playing a repertoire of classic Rock Metal from 70s and 80s (AC/DC, Led Zeppelin, Kiss, ecc...) with skills and passion that scores between rock and metal fans!",
        currency: "CHF",
        musician: true,
        tagline: "Classic Rock Band, covers and original tunes played on they're best",
        ratingVotes: 3,
        ratingStars: 10,
        nickName: "altovoltaggio",
        userBookPlace: "zürich",
        city: "Mezzovico-Vira",
        country: "CH",
        location: "Mezzovico-Vira, CH",
        subtypes: ["Big Band", "Cover", "Lounge"],
        imageUrl: "/thumb.png",
        whois: "youtube",
        videoYtId: "fj-V7UW6vD4",
        itemprop_desc: "Rock, Metal Classic Rock Classic Rock Band, covers and original tunes played on they're best",
        cachet_min: "500", 
        telephone: "+41791234567",
        level_css: "rockstar",
    }
];

export const resultMock: Selection = resultsMock[0];

register('en', () => Promise.resolve(en));

export { t };

init({
    fallbackLocale: 'en',
    initialLocale: 'en',
});