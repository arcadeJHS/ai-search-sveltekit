<svelte:options customElement={{
	tag: 'webcomponent-ai-search-results',
	shadow: 'none'
}} />

<script lang="ts">
    import { searchStore } from '$lib/stores/SearchStore.ts';
    import WcAiSearchResult from '$lib/web-components/wc-ai-search-result.svelte'; 
</script>

{#if $searchStore}

    <div class="container wc-ai-search-results">
        <div class="row row-cols-1 row-cols-md-4 g-4">

            {#each $searchStore.selections as result}
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