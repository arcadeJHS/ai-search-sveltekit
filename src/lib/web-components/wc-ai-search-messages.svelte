<svelte:options customElement={{
	tag: 'webcomponent-ai-search-messages',
	shadow: 'none'
}} />

<script lang="ts">
import { userMessagesStore } from '$lib/stores/userMessagesStore.ts';
import { searchStore } from '$lib/stores/searchStore.ts';
import { tick, onMount } from 'svelte';
import AiSearchMessage from '$lib/components/AiSearchMessage.svelte';

let className: string = '';
export { className as class };

let inner: HTMLDivElement;

const scrollToLastMessage = async () => {
    await tick();
    inner?.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};

const selectResultsSet = (key: string) => {
    searchStore.selectResultsSet(key);
};

$: {
    $userMessagesStore.length;
    scrollToLastMessage();
}

onMount(() => {
    scrollToLastMessage();
});
</script>

<div class={`wc-ai-search-messages ${className}`} bind:this={inner}>
    {#if $userMessagesStore}
        <div>    
            {#each $userMessagesStore as message}
                <AiSearchMessage 
                    message={message} 
                    active={message.key === $searchStore.currentResultsSetKey}
                    on:click={() => selectResultsSet(message.key)} 
                />
            {/each}
        </div>
    {/if}
</div>

<style>
.wc-ai-search-messages {    
    height: 100%;
    overflow-y: auto;

    /* Gives space to scroll bar */
    /* padding-right: 1rem; */
}
.wc-ai-search-messages > div {
    display: flex;
    flex-direction: column-reverse;
    gap: 0.5rem;
}
</style>