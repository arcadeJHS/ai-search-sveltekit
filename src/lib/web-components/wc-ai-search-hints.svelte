<svelte:options customElement={{
	tag: 'webcomponent-ai-search-hints',
	shadow: 'none'
}} />

<script lang="ts">
import { userQueriesStore } from '$lib/stores/userQueriesStore.ts';
import AiSearchHints from '$lib/components/AiSearchHints.svelte';

const hintsToShow = 4;
</script>

{#if !$userQueriesStore.length}
    <AiSearchHints {hintsToShow} />
{/if}