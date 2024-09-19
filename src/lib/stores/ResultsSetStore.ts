import { derived, type Readable } from 'svelte/store';
import { type Selection } from '$lib/types/Selection.ts';
import { searchStore } from './SearchStore.ts';

export const ResultsSetStore: Readable<Selection[]> = derived(searchStore, ($searchStore) => {
    if (!$searchStore.currentResponseKey || !$searchStore.responses[$searchStore.currentResponseKey]) {
        return [];
    }
    return <Selection[]>$searchStore.responses[$searchStore.currentResponseKey].selection;
});