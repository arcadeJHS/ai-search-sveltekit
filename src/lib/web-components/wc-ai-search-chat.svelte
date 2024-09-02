<svelte:options customElement={{
	tag: 'PREFIX-ai-search-chat',
	shadow: 'none'
}} />

<script lang="ts">
    import AiSearchChat from '$lib/components/AiSearchChat.svelte';
    import { searchStore } from '$lib/stores/SearchStore.ts';
</script>

{#if $searchStore}
    <AiSearchChat messages={$searchStore.messages} />
{/if}
