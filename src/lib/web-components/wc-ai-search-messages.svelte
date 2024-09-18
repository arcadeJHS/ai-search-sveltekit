<svelte:options customElement={{
	tag: 'webcomponent-ai-search-messages',
	shadow: 'none'
}} />

<script lang="ts">
import AiSearchmessages from '$lib/components/AiSearchMessages.svelte';
import { userMessagesStore } from '$lib/stores/UserMessagesStore.ts';

let className: string = '';
export { className as class };
</script>

<div class={`wc-ai-search-messages ${className}`}>
    {#if $userMessagesStore}
        <AiSearchmessages messages={$userMessagesStore} />
    {/if}
</div>

<style>
.wc-ai-search-messages {    
    height: 100%;
    overflow-y: auto;

    /* Gives space to scroll bar */
    padding-right: 1rem;
}
</style>