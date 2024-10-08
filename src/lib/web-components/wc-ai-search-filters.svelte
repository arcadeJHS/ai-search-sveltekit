<svelte:options customElement={{
	tag: 'webcomponent-ai-search-filters',
	shadow: 'none',
	props: {
		visible: { reflect: true, type: 'Boolean', attribute: 'visible' },
	},
}} />

<script lang="ts">
import { filtersStore } from '$lib/stores/filtersStore.ts';
import { userQueriesStore } from '$lib/stores/userQueriesStore.ts';
import { type Filter, type SuggestionPool } from '$lib/types/Filter.ts';
import  AiSearchFilters from '$lib/components/AiSearchFilters.svelte';

export let visible: boolean = false;

let appliedFilters: Filter[] = [];
let notAppliedFilters: (keyof SuggestionPool)[] = [];

$: visibleBoolean = (typeof visible === 'string') ? (visible === 'true') : visible;
$: appliedFilters = $filtersStore.applied;
$: notAppliedFilters = $filtersStore.notApplied;
$: queries = $userQueriesStore;
</script>

{#if visibleBoolean && queries.length}
    <AiSearchFilters {appliedFilters} {notAppliedFilters} />
{/if}