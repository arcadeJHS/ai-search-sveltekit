<svelte:options customElement={{
	tag: 'PREFIX-ai-search-results',
	shadow: 'none'
}} />

<script lang="ts">
    import { searchStore } from '$lib/stores/SearchStore.ts';
    import WcAiSearchResult from '$lib/web-components/wc-ai-search-result.svelte'; 
</script>

{#if $searchStore}

    <div class="container">
        <div id="profiles_container" class="row row-cols-1 row-cols-md-4 g-4">

            {#each $searchStore.selections as result}

                <WcAiSearchResult {result} />

            {/each}

        </div>
    </div>
    
{/if}
