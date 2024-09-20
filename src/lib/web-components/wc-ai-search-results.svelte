<svelte:options customElement={{
	tag: 'webcomponent-ai-search-results',
	shadow: 'none'
}} />

<script lang="ts">
import { tick, onMount } from 'svelte';
import { searchStore } from '$lib/stores/searchStore.ts';
import AiSearchSearchingIcon from '$lib/components/AiSearchSearchingIcon.svelte';
import WcAiSearchResult from '$lib/web-components/wc-ai-search-result.svelte'; 
import { resultsSetStore } from '$lib/stores/resultsSetStore.ts';

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

$: {
    $resultsSetStore;
    scrollToTop();
}

onMount(() => {
    scrollToTop();
});
</script>

{#if $searchStore}

    <div class="container wc-ai-search-results">
        <div class="row row-cols-1 row-cols-md-4 g-4">

            <AiSearchSearchingIcon searching={$searchStore.status === 'pending'} />

            {#each $resultsSetStore as result}
                <WcAiSearchResult {result} />
            {/each}

        </div>
    </div>
    
{/if}

<style>
.wc-ai-search-results {
    padding: 0.5rem;
}
</style>