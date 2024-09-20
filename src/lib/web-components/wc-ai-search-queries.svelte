<svelte:options customElement={{
	tag: 'webcomponent-ai-search-queries',
	shadow: 'none'
}} />

<script lang="ts">
import { userQueriesStore } from '$lib/stores/userQueriesStore.ts';
import { searchStore } from '$lib/stores/searchStore.ts';
import { tick, onMount, createEventDispatcher } from 'svelte';
import AiSearchQuery from '$lib/components/AiSearchQuery.svelte';

let className: string = '';
export { className as class };

let inner: HTMLDivElement;

const dispatch = createEventDispatcher();

const scrollToLastQuery = async () => {
    await tick();
    inner?.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};

const selectResultsSet = (key: string) => {
    searchStore.selectResultsSet(key);
    dispatch('querySelected');
};

$: {
    $userQueriesStore.length;
    scrollToLastQuery();
}

onMount(() => {
    scrollToLastQuery();
});
</script>

<div class={`wc-ai-search-queries ${className}`} bind:this={inner}>
    {#if $userQueriesStore}
        <div>    
            {#each $userQueriesStore as query}
                <AiSearchQuery 
                    query={query} 
                    active={query.key === $searchStore.currentResultsSetKey}
                    on:click={() => selectResultsSet(query.key)} 
                />
            {/each}
        </div>
    {/if}
</div>

<style>
.wc-ai-search-queries {    
    height: 100%;
    overflow-y: auto;

    /* Gives space to scroll bar */
    /* padding-right: 1rem; */
}
.wc-ai-search-queries > div {
    display: flex;
    flex-direction: column-reverse;
    gap: 0.5rem;
}
</style>