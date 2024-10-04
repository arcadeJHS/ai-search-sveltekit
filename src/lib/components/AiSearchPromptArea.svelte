<script lang="ts">
import { createEventDispatcher } from 'svelte';
import AiSearchUserInputForm from '$lib/components/AiSearchUserInputForm.svelte';
import AiSearchQueriesOffcanvasShowButton from '$lib/components/AiSearchQueriesOffcanvasShowButton.svelte';
import AiSearchSuggestions from '$lib/components/AiSearchSuggestions.svelte';
import { type FilterSuggestion } from '$lib/types/Filter.ts';
import AiSearchNewSearchButton from '$lib/components/AiSearchNewSearchButton.svelte';

export let isFollowup: boolean = false;
export let searchStatus: string = 'idle';
export let searchSession: string | null = null;
export let filters: FilterSuggestion;

const dispatch = createEventDispatcher();
</script>

<div 
    class="ai-search-prompt-area"
    class:ai-search-prompt-area--top={!isFollowup}
    class:ai-search-prompt-area--bottom={isFollowup}>
    <div>
        {#if searchSession}
            <div class="ai-search-prompt-area__actions">
                <AiSearchNewSearchButton on:click={() => dispatch('resetSearch')} />
                <AiSearchQueriesOffcanvasShowButton on:click={() => dispatch('toggleQueriesOffcanvas')} />
            </div>
        {/if}
        <AiSearchUserInputForm
            --textarea-height="6rem"
            isFollowup={isFollowup}
            textareaShouldBeFocused={searchStatus === 'idle'}
            disableTextarea={!!~['starting', 'ending', 'searching'].indexOf(searchStatus)}
            on:userInput />
    
        {#if filters?.notApplied?.length}
            <div class="ai-search-prompt-area__suggestions">
                <AiSearchSuggestions filters={filters} />
            </div>
        {/if}
    </div>
</div>

<style>
.ai-search-prompt-area {
    width: 100%;

    @media (min-width: 768px) {
        padding-bottom: 0.5rem;
    }
}
.ai-search-prompt-area > div {
    background-color: #f2f2f6;
    /* box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.3); */
}
.ai-search-prompt-area--top {
    display: flex;
    justify-content: center;
    border-radius: 0.5rem;
    padding: 0.5rem;
}
.ai-search-prompt-area--top > div {
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
.ai-search-prompt-area--bottom {
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
.ai-search-prompt-area--bottom > div {
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
.ai-search-prompt-area__actions {
    display: none;
}
.ai-search-prompt-area--bottom > div .ai-search-prompt-area__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.5rem 1rem;
}
.ai-search-prompt-area__suggestions {
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