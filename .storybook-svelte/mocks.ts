import { register, init, t } from 'svelte-i18n';
import en from '../src/lib/i18n/en.json';
import { type FilterSuggestion, FilterType } from '../src/lib/types/Filter';

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

register('en', () => Promise.resolve(en));

export { t };

init({
    fallbackLocale: 'en',
    initialLocale: 'en',
});