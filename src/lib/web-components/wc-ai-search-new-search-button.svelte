<svelte:options customElement={{
	tag: 'webcomponent-ai-search-new-search-button',
	shadow: 'none'
}} />

<script lang="ts">
import { searchStore } from '$lib/stores/searchStore.ts';
import AiSearchNewSearchButton from '$lib/components/AiSearchNewSearchButton.svelte';
import { userQueriesStore } from '$lib/stores/userQueriesStore.ts';

const newSearch = async () => {
    return await searchStore.reset();
};
</script>

{#if $userQueriesStore.length}
	<AiSearchNewSearchButton on:click={newSearch} />
{/if}