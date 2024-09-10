<svelte:options customElement={{
	tag: 'PREFIX-ai-search-messages',
	shadow: 'none'
}} />

<script lang="ts">
    import AiSearchmessages from '$lib/components/AiSearchMessages.svelte';
    import { searchStore } from '$lib/stores/SearchStore.ts';
    import { MessageRole } from '$lib/types/Message.ts';

    let userMessages = [];

    // In this version of the component, we are showing only messages with role 'user', so we filter out 'agent' generated messages
    $: userMessages = $searchStore.messages.filter(message => message.role === MessageRole.User);
</script>

<div class="wc-ai-search-messages">
    {#if $searchStore}
        <AiSearchmessages messages={userMessages} />
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