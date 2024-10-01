<svelte:options customElement={{
	tag: 'webcomponent-ai-search-hints',
	shadow: 'none'
}} />

<script lang="ts">
import { onMount } from 'svelte';
import AiSearchHint from '$lib/components/AiSearchHint.svelte';
import { generateRandomSentence } from '$lib/utils/searchSuggestions.ts';
import { t, waitLocale } from 'svelte-i18n';
import { FilterType } from '$lib/types/Filter.ts';
import { type Suggestions } from '$lib/types/Filter.ts';
import { userQueriesStore } from '$lib/stores/userQueriesStore.ts';

const hintsToShow = 4;
let hintHeader = '';

let hints: string[] = [];

const translateHint = (hint: Suggestions) => {
    const artistType = $t(`filters.${FilterType.ARTIST_TYPE}.values.${hint[FilterType.ARTIST_TYPE]}`);
    const artistSubType = $t(`filters.${FilterType.ARTIST_SUB_TYPE}.values.${hint[FilterType.ARTIST_SUB_TYPE]}`);

    const types = [artistType, artistSubType];
    const randomTypeIndex = Math.floor(Math.random() * types.length);
    const type = types[randomTypeIndex];

    return $t('search_suggestion.hint', { values: {
        artistGenre: $t(`filters.${FilterType.ARTIST_GENRE}.values.${hint[FilterType.ARTIST_GENRE]}`),
        type: type,
        showType: $t(`filters.${FilterType.SHOW_TYPE}.values.${hint[FilterType.SHOW_TYPE]}`),
        location: $t(`filters.${FilterType.LOCATION}.values.${hint[FilterType.LOCATION]}`)
    }});
};

const setHints = async () => {
    const _hints: Suggestions[] = Array.from({ length: hintsToShow }, () => generateRandomSentence());
    await waitLocale();
    hintHeader = $t('search_suggestion.hint_header');
    hints = _hints.map(translateHint);
};

onMount(setHints);
</script>

{#if !$userQueriesStore.length}
    <section class="wc-ai-search-hints">
        <header>
            <p>{hintHeader}</p>
        </header>
        <main class="wc-ai-search-hints">
            {#each hints as hint}
                <AiSearchHint {hint} />
            {/each}
        </main>
    </section>
{/if}

<style>
.wc-ai-search-hints {
    width: 100%;
}
.wc-ai-search-hints > header > p {
    margin: 0;
    padding: 0;
    padding-bottom: 0.5em;
    font-size: 0.8em;
}
.wc-ai-search-hints > main {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.3rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>