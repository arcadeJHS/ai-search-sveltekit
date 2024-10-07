<script lang="ts">
import { tick, onMount, createEventDispatcher } from 'svelte';
import AiSearchQuery from '$lib/components/AiSearchQuery.svelte';
import type { UserQuery } from '$lib/types/UserQuery.ts';

let className: string = '';
export { className as class };
export let currentResultsSetKey: string = '';
export let queries: UserQuery[] = [];

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

$: {
    // $userQueriesStore.length;
    queries;
    scrollToLastQuery();
}

onMount(() => {
    scrollToLastQuery();
});
</script>

<div class={`ai-search-queries ${className}`} bind:this={inner}>
    <div>    
        {#each queries as query}
            <AiSearchQuery 
                query={query} 
                active={query.key === currentResultsSetKey}
                on:click={() => dispatch('querySelected', { key: query.key})} 
            />
        {/each}
    </div>
</div>

<style>
.ai-search-queries {    
    height: 100%;
    overflow-y: auto;

    /* Gives space to scroll bar */
    /* padding-right: 1rem; */
}
.ai-search-queries > div {
    display: flex;
    flex-direction: column-reverse;
    gap: 0.5rem;
}
</style>