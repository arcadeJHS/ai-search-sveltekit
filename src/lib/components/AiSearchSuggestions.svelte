<script lang="ts">
import Fa from 'svelte-fa';
import { faLightbulb, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import text from '$lib/styles/text.module.css';
import { type FilterSuggestion, type SuggestionPool } from '$lib/types/Filter.ts';
import { t } from 'svelte-i18n';
import button from '$lib/styles/button.module.css';

export let filters: FilterSuggestion;
export let suggestionsVisible: boolean = true;

let visibleNotApplied: (keyof SuggestionPool)[] = [];

const toggleSuggestions = () => {
    suggestionsVisible= !suggestionsVisible;
};

const getCommaSeparatedString = (notApplied: keyof SuggestionPool) => {
    return (filters.suggestions[notApplied] ?? [])
        .map(tip => {
            const translation = $t(`filters.${notApplied}.values.${tip}`);
            return translation || tip;
        })
        .join(', ');
}

// Show a maximum of 4 suggestions
$: visibleNotApplied = filters?.notApplied?.slice(0, 4) || [];
</script>

{#if visibleNotApplied?.length}
    <section class={`${text.base} ai-search-suggestions`}>
        {#if suggestionsVisible}
            <header>
                <p>{$t('search_suggestion.tip_header')}:</p>
            </header>
            
            <main class="ai-search-suggestions__tips">
                {#each visibleNotApplied as notApplied}
                    <span class="ai-search-suggestions__tip">
                        <span class="ai-search-suggestions__tip__icon">
                            <Fa icon={faLightbulb} color="#ffd528" />
                        </span>
                        <span class="ai-search-suggestions__tip__text">
                            <strong>{$t(`filters.${notApplied}.label`)}</strong> 
                            - 
                            <span>{getCommaSeparatedString(notApplied)}</span>
                        </span>
                    </span>
                {/each}
            </main>
        {/if}

        <div>
            <button on:click={toggleSuggestions} class={`${button.iconButton}`}>
                <Fa icon={suggestionsVisible ? faEyeSlash : faLightbulb} color={suggestionsVisible ? 'inherit' : '#ffd528'} />
            </button>
        </div>
    </section>
{/if}

<style>
.ai-search-suggestions {
    font-size: 0.8rem;
}
.ai-search-suggestions > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 0.5rem;
}
.ai-search-suggestions p { 
    margin: 0;
    padding-bottom: 0.2rem;
}
.ai-search-suggestions__tips {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.3rem;
    padding-bottom: 0.5rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
}
.ai-search-suggestions__tip {
    background-color: var(--ai-search-suggestion-background, #ffffff);
    border: 1px solid #dcdcdd;
    border-radius: 0.4rem;
    padding: 0.1rem 0.4rem;
    display: flex;
    align-items: start;
}
.ai-search-suggestions__tip:nth-child(n+3) {
    display: none;

    @media (min-width: 768px) {
        display: flex;
    }
}
.ai-search-suggestions__tip__icon {
    padding-top: 0.1rem;
    padding-right: 0.2rem;
}
.ai-search-suggestions__tip__text {
    padding-left: 0.2rem;
    opacity: 0.8;

    /* cut text to 2 lines only */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
}
.ai-search-suggestions__tip__text > span {
    font-style: italic;
}
</style>