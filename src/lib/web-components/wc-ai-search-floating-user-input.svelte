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
                <AiSearchQueriesOffcanvasShowButton class="wc-ai-search-floating-user-input__actions__show-queries" />
            </div>
        {/if}
        <AiSearchUserInputForm
            --textarea-height="6rem"
            isFollowup={!!$userQueriesStore.length}
            focusTextarea={$searchStore.status === 'idle'}
            disableTextarea={!!~['starting', 'searching'].indexOf($searchStore.status)}
            on:userInput={onUserInput} />
    </div>
</div>

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
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.5);
    
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
    padding: 0.5rem 0.5rem 1.5rem;

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
:global(.wc-ai-search-floating-user-input__actions__show-queries) {
    @media (min-width: 768px) {
        display: none;
    }
}
</style>