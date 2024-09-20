import { derived, type Readable } from 'svelte/store';
import { type Selection } from '$lib/types/Selection.ts';
import { searchStore } from './searchStore.ts';

export const resultsSetStore: Readable<Selection[]> = derived(searchStore, ($searchStore) => {
    if (!$searchStore.currentResultsSetKey || !$searchStore.responses[$searchStore.currentResultsSetKey]) {
        return [];
    }
    return <Selection[]>$searchStore.responses[$searchStore.currentResultsSetKey].selection;
});