<svelte:options customElement={{
	tag: 'webcomponent-ai-search-filters-debug',
	shadow: 'none',
	props: {
		visible: { reflect: true, type: 'Boolean', attribute: 'visible' },
	},
}} />

<script lang="ts">
import { filtersStore } from '$lib/stores/filtersStore.ts';
import { userQueriesStore } from '$lib/stores/userQueriesStore.ts';
import { type Filter, type SuggestionPool } from '$lib/types/Filter.ts';
import  AiSearchFiltersDebug from '$lib/components/AiSearchFiltersDebug.svelte';
import { searchStore } from '$lib/stores/searchStore.ts';

export let visible: boolean = false;

let appliedFilters: Filter[] = [];
let notAppliedFilters: (keyof SuggestionPool)[] = [];

$: visibleBoolean = (typeof visible === 'string') ? (visible === 'true') : visible;
$: appliedFilters = $filtersStore.applied;
$: notAppliedFilters = $filtersStore.notApplied;
$: queries = $userQueriesStore;
$: skippedIds = $searchStore?.currentResultsSetKey ? $searchStore.responses[$searchStore.currentResultsSetKey]?.additionalInfos?.skippedIds : [];
</script>

{#if visibleBoolean && queries.length}
    <AiSearchFiltersDebug {appliedFilters} {notAppliedFilters} {skippedIds} />
{/if}