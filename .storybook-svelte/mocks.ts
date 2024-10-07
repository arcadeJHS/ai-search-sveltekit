import { register, init, t } from 'svelte-i18n';
import en from '../src/lib/i18n/en.json';
import { type FilterSuggestion, FilterType } from '../src/lib/types/Filter';
import type { UserQuery } from '../src/lib/types/UserQuery.ts';
import { MessageRole } from '../src/lib/types/Message.ts';

export const filtersSuggestionsMock: FilterSuggestion = {
    query: 'A rock band for a party in Lugano',
    applied: [{
        f: FilterType.ARTIST_GENRE,
        k: 2,
        v: 'Rock',
        i: false
    }],
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

register('en', () => Promise.resolve(en));

export { t };

init({
    fallbackLocale: 'en',
    initialLocale: 'en',
});