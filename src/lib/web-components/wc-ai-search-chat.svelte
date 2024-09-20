<svelte:options customElement={{
	tag: 'webcomponent-ai-search-chat',
	shadow: 'none'
}} />

<script lang="ts">
import AiSearchChat from '$lib/components/AiSearchChat.svelte';
import { searchStore } from '$lib/stores/searchStore.ts';
</script>

{#if $searchStore}
    <AiSearchChat messages={$searchStore.messages} />
{/if}
