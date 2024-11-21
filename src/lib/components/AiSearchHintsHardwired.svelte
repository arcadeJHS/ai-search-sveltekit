<script lang="ts">
import { onMount } from 'svelte';
import AiSearchHint from '$lib/components/AiSearchHint.svelte';
import { t, waitLocale } from 'svelte-i18n';

let hintHeader = '';

let hints: string[] = [];

const setHints = async () => {
    await waitLocale();
    hintHeader = $t('search_suggestion.hint_header');
    hints = [
        $t('search_suggestion.hardwired-hints.1'),
        $t('search_suggestion.hardwired-hints.2'),
        $t('search_suggestion.hardwired-hints.3'),
        $t('search_suggestion.hardwired-hints.4')
    ];
};

onMount(setHints);
</script>

<section class="ai-search-hints">
    <header>
        <p>{hintHeader}</p>
    </header>
    <main class="ai-search-hints">
        {#each hints as hint}
            <AiSearchHint {hint} />
        {/each}
    </main>
</section>

<style>
.ai-search-hints {
    width: 100%;
    padding: 0.5rem;

    @media (min-width: 768px) {
        padding: 0;
    }
}
.ai-search-hints > header > p {
    margin: 0;
    padding: 0;
    padding-bottom: 0.5em;
    font-size: 0.8em;
}
.ai-search-hints > main {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.3rem;
    padding: 0;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>