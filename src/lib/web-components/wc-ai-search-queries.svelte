<svelte:options customElement={{
	tag: 'webcomponent-ai-search-queries',
	shadow: 'none'
}} />

<script lang="ts">
import { userQueriesStore } from '$lib/stores/userQueriesStore.ts';
import { searchStore } from '$lib/stores/searchStore.ts';
import AiSearchQueries from '$lib/components/AiSearchQueries.svelte';

const selectResultsSet = (e: CustomEvent) => {
    const key = e?.detail?.key;
    searchStore.selectResultsSet(key);
};

$: queries = $userQueriesStore;
</script>

<AiSearchQueries
    currentResultsSetKey={$searchStore.currentResultsSetKey || ''} 
    {queries}  
    on:querySelected={selectResultsSet}
/>