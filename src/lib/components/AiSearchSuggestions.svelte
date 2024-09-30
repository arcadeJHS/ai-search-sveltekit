<script lang="ts">
import Fa from 'svelte-fa';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import text from '$lib/styles/text.module.css';
import { type FilterSuggestion, type SuggestionPool } from '$lib/types/Filter.ts';
import { t } from 'svelte-i18n';

export let filters: FilterSuggestion;

let visibleNotApplied: (keyof SuggestionPool)[] = [];

const getCommaSeparatedString = (notApplied: keyof SuggestionPool) => {
    return (filters.suggestions[notApplied] ?? [])
        .map(tip => {
            const translation = $t(`filters.${notApplied}.values.${tip}`);
            console.log('trans:', translation);
            return translation || tip;
        })
        .join(', ');
}

// Show a maximum of 4 suggestions
$: visibleNotApplied = filters?.notApplied?.slice(0, 4) || [];
</script>

{#if visibleNotApplied?.length}
    <section class={`${text.base} ai-search-suggestions`}>
        <header><p>{$t('search_suggestion.tip_header')}:</p></header>
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
    </section>

    <!-- <code>
        <pre>
            {JSON.stringify(filters, null, 2)}
        </pre>
    </code> -->
{/if}

<style>
.ai-search-suggestions {
    font-size: 0.8rem;
}
.ai-search-suggestions p { 
    margin: 0;
    padding-bottom: 0.2rem;
}
.ai-search-suggestions__tips {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.3rem;
}
.ai-search-suggestions__tip {
    background-color: var(--ai-search-suggestion-background, #ffffff);
    border: 1px solid #dcdcdd;
    border-radius: 0.4rem;
    padding: 0.1rem 0.4rem;
    display: flex;
    align-items: start;
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