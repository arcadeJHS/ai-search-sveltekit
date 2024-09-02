<svelte:options customElement={{
	tag: 'PREFIX-ai-search-results',
	shadow: 'none'
}} />

<script lang="ts">
    import AiSearchResults from '$lib/components/AiSearchResults.svelte';

    // Here we are using SearchStore as a central store/event bus to share data and events among components
    import { searchStore } from '$lib/stores/SearchStore.ts';
</script>

{#if $searchStore}
    <AiSearchResults results={$searchStore.selections} />
{/if}
