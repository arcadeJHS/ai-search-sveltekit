import { derived, type Readable } from 'svelte/store';
import { searchStore } from './searchStore.ts';
import { type Filter, type FilterSuggestion, FilterType } from '$lib/types/Filter.ts';
import { type SuggestionPool } from '$lib/types/Filter.ts';
import { suggestionUsefulFilters, getRandomIds } from '$lib/utils/searchSuggestions.ts';

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