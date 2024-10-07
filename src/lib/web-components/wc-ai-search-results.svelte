<svelte:options customElement={{
    tag: 'webcomponent-ai-search-results',
    shadow: 'none'
}} />

<script lang="ts">
import AiSearchResults from '$lib/components/AiSearchResults.svelte';

import { searchStore } from '$lib/stores/searchStore.ts';
import { userQueriesStore } from '$lib/stores/userQueriesStore.ts';
import { resultsSetStore } from '$lib/stores/resultsSetStore.ts';
import { playingVideoStore } from '$lib/stores/playingVideoStore.ts';

let itemsToShow = 9;

$: searchStatus = $searchStore.status;
$: resultsSet = $resultsSetStore;
$: currentPlayingVideoId = $playingVideoStore ?? undefined;

const handleLoadVideo = (event: { detail: { videoId: number; } }) => {
    playingVideoStore.set(event.detail.videoId);
}
</script>

{#if $searchStore && $userQueriesStore.length}
    <AiSearchResults
        {searchStatus} 
        {resultsSet}
        {currentPlayingVideoId}
        {itemsToShow}
        on:loadVideo={handleLoadVideo}
        on:resultSelected={() => playingVideoStore.stopAllVideos()}
    />
{/if}