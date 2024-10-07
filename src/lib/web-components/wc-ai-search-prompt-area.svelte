<svelte:options customElement={{
	tag: 'webcomponent-ai-search-prompt-area',
	shadow: 'none'
}} />

<script lang="ts">
import AiSearchPromptArea from '$lib/components/AiSearchPromptArea.svelte';
import { searchStore } from '$lib/stores/searchStore.ts';
import { userQueriesStore } from '$lib/stores/userQueriesStore.ts';
import type { UserInput } from '$lib/types/UserInput.ts';
import { filtersStore } from '$lib/stores/filtersStore.ts';
import { Offcanvas } from '@sveltestrap/sveltestrap';
import padding from '$lib/styles/padding.module.css';
import offcanvas from '$lib/styles/offcanvas.module.css';
import AiSearchQueries from '$lib/components/AiSearchQueries.svelte';

$: isFollowup = !!$userQueriesStore.length;
$: searchStatus = $searchStore.status;
$: searchSession = $searchStore.session;
$: filters = $filtersStore;
$: queries = $userQueriesStore;

let isOpen = false;

const toggle = () => {
    isOpen = !isOpen;
};

const selectResultsSet = (e: CustomEvent) => {
    const key = e?.detail?.key;
    searchStore.selectResultsSet(key);
    toggle();
};

const onUserInput = async (event: CustomEvent) => {
    const content: UserInput = event.detail.content;

    if (!content) {
        return;
    }

    return await searchStore.search(content);
};

const resetSearch = async () => await searchStore.reset();
</script>

{#if ['idle', 'error'].includes(searchStatus) }
    <AiSearchPromptArea 
        {isFollowup} 
        {searchStatus} 
        {searchSession} 
        {filters}
        on:userInput={onUserInput}
        on:toggleQueriesOffcanvas={toggle} 
        on:resetSearch={resetSearch}
    />

    <Offcanvas {isOpen} {toggle} backdrop={false} placement="bottom" class={`${offcanvas.offcanvasBottomShow}`}>
        <AiSearchQueries
            class={padding.noPadding} 
            currentResultsSetKey={$searchStore.currentResultsSetKey || ''} 
            {queries}  
            on:querySelected={selectResultsSet}
        />
    </Offcanvas>
{/if}