<script lang="ts">
import { tick, onMount } from 'svelte';
import AiSearchSearchingIcon from '$lib/components/AiSearchSearchingIcon.svelte';
import button from '$lib/styles/button.module.css';
import { t } from 'svelte-i18n';
import AiSearchResult from '$lib/components/AiSearchResult.svelte';
import { type SearchThreadStatus } from '$lib/types/SearchThread.ts';
import { type Selection } from '$lib/types/Selection.ts';
 
export let searchStatus: SearchThreadStatus = 'idle';
export let resultsSet:Selection[] = [];
export let currentPlayingVideoId: number | undefined;
export let itemsToShow: number = 9;

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

$: resultsSet, scrollToTop();
$: paginatedResults = resultsSet.slice(0, itemsToShow);

const showMore = () => {
    itemsToShow += 9;
}

onMount(() => {
    scrollToTop();
});
</script>

<div class="container g-4">
    <AiSearchSearchingIcon searching={searchStatus === 'searching'} />

    <div class="row">
        {#if searchStatus !== 'searching' && !paginatedResults.length}
            <div class="col">
                <p style="margin: 0.8rem;">{$t('no_results')}</p>
            </div>
        {:else}
            {#each paginatedResults as result}
                <AiSearchResult 
                    {result}
                    {currentPlayingVideoId} 
                    on:loadVideo
                    on:resultSelected
                />
            {/each}
        {/if}
    </div>
    
    {#if itemsToShow < resultsSet.length}
        <div class="show-more">
            <button class={button.outlined} on:click={showMore}>{$t('show_more')}</button>
        </div>
    {/if}
</div>

<style>
.show-more {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}
</style>