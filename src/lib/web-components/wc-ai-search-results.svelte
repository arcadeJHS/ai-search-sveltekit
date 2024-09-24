<svelte:options customElement={{
    tag: 'webcomponent-ai-search-results',
    shadow: 'none'
}} />

<script lang="ts">
import { tick, onMount } from 'svelte';
import { searchStore } from '$lib/stores/searchStore.ts';
import AiSearchSearchingIcon from '$lib/components/AiSearchSearchingIcon.svelte';
import AiSearchResult from '$lib/web-components/ai-search-result.svelte'; 
import { resultsSetStore } from '$lib/stores/resultsSetStore.ts';
import button from '$lib/styles/button.module.css';

let itemsToShow = 9;

const scrollToTop = async () => {
    await tick();
    if (typeof window !== 'undefined') {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
};

$: paginatedResults = $resultsSetStore.slice(0, itemsToShow);

function showMore() {
    itemsToShow += 9;
}

onMount(() => {
    scrollToTop();
});
</script>

{#if $searchStore}
    <div class="container wc-ai-search-results">
        <AiSearchSearchingIcon searching={$searchStore.status === 'searching'} />
        <div class="row g-4">
            {#each paginatedResults as result}
                <AiSearchResult {result} />
            {/each}
        </div>
        {#if itemsToShow < $resultsSetStore.length}
            <div class="show-more">
                <button class={button.outlined} on:click={showMore}>Show More</button>
            </div>
        {/if}
    </div>
{/if}

<style>
.wc-ai-search-results {
    padding: 0.5rem;
}

.show-more {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}
</style>