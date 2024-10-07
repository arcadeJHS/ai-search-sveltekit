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
import WcAiSearchQueries from '$lib/web-components/wc-ai-search-queries.svelte';
import { Offcanvas } from '@sveltestrap/sveltestrap';
import padding from '$lib/styles/padding.module.css';
import offcanvas from '$lib/styles/offcanvas.module.css';
	import { includes } from 'lodash';

$: isFollowup = !!$userQueriesStore.length;
$: searchStatus = $searchStore.status;
$: searchSession = $searchStore.session;
$: filters = $filtersStore;

let isOpen = false;

const toggle = () => {
    isOpen = !isOpen;
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
        <WcAiSearchQueries class={padding.noPadding} on:querySelected={toggle} />
    </Offcanvas>
{/if}