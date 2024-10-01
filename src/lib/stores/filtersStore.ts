import { derived, type Readable } from 'svelte/store';
import { searchStore } from './searchStore.ts';
import { type Filter, type FilterSuggestion, FilterType } from '$lib/types/Filter.ts';
import { type SuggestionPool } from '$lib/types/Filter.ts';
import { suggestionUsefulFilters, getRandomIds } from '$lib/utils/searchSuggestions.ts';

const emptyFilterStore: FilterSuggestion = {
    query: '',
    applied: [],
    notApplied: [],
    suggestions: {}
};

// Memoize getRandomIds results
const memoizedGetRandomIds = (() => {
    const cache: Partial<Record<FilterType, (number | string)[]>> = {};
    return (filterType: FilterType) => {
        if (!cache[filterType]) {
            cache[filterType] = getRandomIds(filterType as Exclude<FilterType, FilterType.LANGUAGE>);
        }
        return cache[filterType];
    };
})();

export const filtersStore: Readable<FilterSuggestion> = derived(searchStore, ($searchStore) => {
    if ($searchStore.status !== 'idle') {
        return emptyFilterStore;
    }

    const currentResultsSetKey = $searchStore.currentResultsSetKey;
    const currentResultsSet = currentResultsSetKey ? $searchStore.responses[currentResultsSetKey] : undefined;

    if (!currentResultsSetKey || !currentResultsSet) {
        return emptyFilterStore;
    }

    const query = currentResultsSet.query || '';

    const appliedFilters = new Set<FilterType>(
        currentResultsSet.filters
            .filter((filter: Filter) => suggestionUsefulFilters.has(filter.f as keyof SuggestionPool))
            .map((filter: Filter) => filter.f as FilterType)
    );

    const notAppliedFilters = Array.from(suggestionUsefulFilters)
        .filter((filter: keyof SuggestionPool) => !appliedFilters.has(filter as FilterType));

    const suggestions = notAppliedFilters.reduce((acc, key) => {
        const filterType = key as FilterType;
        acc[filterType] = memoizedGetRandomIds(filterType);
        return acc;
    }, {} as Record<FilterType, (number | string)[]>);

    return {
        query,
        applied: currentResultsSet.filters,
        notApplied: notAppliedFilters,
        suggestions
    };
});