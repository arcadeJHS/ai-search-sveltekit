import { derived, type Readable } from 'svelte/store';
import { searchStore } from './searchStore.ts';
import { type Filter, type FilterSuggestion, FilterType } from '$lib/types/Filter.ts';
import { ShowTypeEnum, ArtistTypeEnum, ArtistSubTypeEnum, ArtistGenreEnum, type SuggestionPool } from '$lib/types/Filter.ts';

export const suggestionUsefulFilters: Set<keyof SuggestionPool> = new Set([
    FilterType.SHOW_TYPE,
    FilterType.ARTIST_TYPE,
    FilterType.ARTIST_SUB_TYPE,
    FilterType.ARTIST_GENRE,
    FilterType.WHEN,
    FilterType.LOCATION
]);

const suggestionsPool: SuggestionPool = {
    [FilterType.SHOW_TYPE]: Object.values(ShowTypeEnum).filter(Number.isInteger) as number[],
    [FilterType.ARTIST_TYPE]: Object.values(ArtistTypeEnum).filter(Number.isInteger) as number[],
    [FilterType.ARTIST_SUB_TYPE]: Object.values(ArtistSubTypeEnum).filter(Number.isInteger) as number[],
    [FilterType.ARTIST_GENRE]: Object.values(ArtistGenreEnum).filter(Number.isInteger) as number[],
    [FilterType.LOCATION]: ['zurich', 'geneva', 'basel', 'lausanne', 'bern', 'lucerne', 'lugano'],
    [FilterType.WHEN]: ['suggestion']
};

// Returns 3 random ids from the suggestionsPool
const getRandomIds = (filterType: keyof SuggestionPool): (number | string)[] => {
    const maxNumberOfSuggestions = 10;
    const array: (number | string)[] = suggestionsPool[filterType];
    const randomIds: Set<number | string> = new Set();

    if (array.length <= maxNumberOfSuggestions) {
        return array;
    }

    while (randomIds.size < maxNumberOfSuggestions) {
        const randomIndex = Math.floor(Math.random() * array.length);
        randomIds.add(array[randomIndex]);
    }

    return Array.from(randomIds);
}

export const filtersStore: Readable<FilterSuggestion> = derived(searchStore, ($searchStore) => {
    const response: FilterSuggestion = {
        query: '',
        applied: [],
        notApplied: [],
        suggestions: {}
    };

    const currentResultsSetKey = $searchStore.currentResultsSetKey;
    const currentResultsSet = currentResultsSetKey ? $searchStore.responses[currentResultsSetKey] : undefined;

    if (!currentResultsSetKey || !currentResultsSet) {
        return response;
    }

    const query = currentResultsSet.query || '';

    const appliedFilters = new Set<FilterType>(
        currentResultsSet.filters
            .filter((filter: Filter) => suggestionUsefulFilters.has(filter.f as keyof SuggestionPool))
            .map((filter: Filter) => filter.f as FilterType)
    );

    const notAppliedFilters = Array.from(suggestionUsefulFilters).filter((filter: keyof SuggestionPool) => !appliedFilters.has(filter));

    const suggestions = notAppliedFilters.reduce((acc, key) => {
        const filterType = key as keyof SuggestionPool;
        acc[filterType] = getRandomIds(filterType);
        return acc;
    }, {} as Record<FilterType, (number | string)[]>);

    return {
        query,
        applied: currentResultsSet.filters,
        notApplied: notAppliedFilters,
        suggestions
    };
});