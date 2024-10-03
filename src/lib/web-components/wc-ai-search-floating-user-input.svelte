<svelte:options customElement={{
	tag: 'webcomponent-ai-search-floating-user-input',
	shadow: 'none'
}} />

<script lang="ts">
import AiSearchUserInputForm from '$lib/components/AiSearchUserInputForm.svelte';
import { searchStore } from '$lib/stores/searchStore.ts';
import { userQueriesStore } from '$lib/stores/userQueriesStore.ts';
import type { UserInput } from '$lib/types/UserInput.ts';
import WcAiSearchNewSearchButton from '$lib/web-components/wc-ai-search-new-search-button.svelte';
import AiSearchQueriesOffcanvasShowButton from '$lib/components/AiSearchQueriesOffcanvasShowButton.svelte';
import AiSearchSuggestions from '$lib/components/AiSearchSuggestions.svelte';
import { filtersStore } from '$lib/stores/filtersStore.ts';
import WcAiSearchQueries from '$lib/web-components/wc-ai-search-queries.svelte';
import { Offcanvas } from '@sveltestrap/sveltestrap';
import padding from '$lib/styles/padding.module.css';
import offcanvas from '$lib/styles/offcanvas.module.css';

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
</script>

<div 
    class="wc-ai-search-floating-user-input"
    class:wc-ai-search-floating-user-input--fixed={$userQueriesStore.length}
    class:wc-ai-search-floating-user-input--static={!$userQueriesStore.length}>
    <div>
        {#if $searchStore.session}
            <div class="wc-ai-search-floating-user-input__actions">
                <WcAiSearchNewSearchButton />
                <AiSearchQueriesOffcanvasShowButton on:click={toggle} />
            </div>
        {/if}
        <AiSearchUserInputForm
            --textarea-height="6rem"
            isFollowup={!!$userQueriesStore.length}
            textareaShouldBeFocused={$searchStore.status === 'idle'}
            disableTextarea={!!~['starting', 'ending', 'searching'].indexOf($searchStore.status)}
            on:userInput={onUserInput} />
    
        {#if $filtersStore?.notApplied?.length}
            <div class="wc-ai-search-floating-user-input__suggestions">
                <AiSearchSuggestions filters={$filtersStore} />
            </div>
        {/if}
    </div>
</div>

<Offcanvas {isOpen} {toggle} backdrop={false} placement="bottom" class={`${offcanvas.offcanvasBottomShow}`}>
    <WcAiSearchQueries class={padding.noPadding} on:querySelected={toggle} />
</Offcanvas>

<style>
.wc-ai-search-floating-user-input {
    width: 100%;

    @media (min-width: 768px) {
        padding-bottom: 0.5rem;
    }
}
.wc-ai-search-floating-user-input > div {
    background-color: #f2f2f6;
    /* box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.3); */
}
.wc-ai-search-floating-user-input--static {
    display: flex;
    justify-content: center;
    border-radius: 0.5rem;
    padding: 0.5rem;
}
.wc-ai-search-floating-user-input--static > div {
    flex-grow: 1;
    border-radius: 0.5rem;
    /* padding: 0.5rem; */
    padding: 0.1rem;

    @media (min-width: 768px) {
        max-width: 50vw;
    }

    @media (min-width: 992px) {
        max-width: 30vw;
    }
}
.wc-ai-search-floating-user-input--fixed {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    
    border-radius: 0.5rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    @media (min-width: 768px) {
        max-width: 50vw;
        box-shadow: none;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    }

    @media (min-width: 992px) {
        max-width: 33vw;
    }
}
.wc-ai-search-floating-user-input--fixed > div {
    border-radius: 0;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    padding: 0.5rem 0.5rem 0.5rem;
    box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.5);

    @media (min-width: 768px) {
        border-radius: 0.5rem;
        padding-bottom: 0.5rem;
    }
}
.wc-ai-search-floating-user-input__actions {
    display: none;
}
.wc-ai-search-floating-user-input--fixed > div .wc-ai-search-floating-user-input__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.5rem 1rem;
}
.wc-ai-search-floating-user-input__suggestions {
    margin-top: 0.5rem;
}
/* Set visibility of the <AiSearchQueriesOffcanvasShowButton /> component via the custom property --ai-search-show-query-offcanvas-button-display */
:global(:root) {
    --ai-search-show-query-offcanvas-button-display: block;

    @media (min-width: 768px) {
        --ai-search-show-query-offcanvas-button-display: none;
    }
}
</style>