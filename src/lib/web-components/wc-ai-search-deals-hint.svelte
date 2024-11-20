<svelte:options customElement={{
	tag: 'webcomponent-ai-search-deals-hint',
	shadow: 'none'
}} />

<script lang="ts">
import { onMount } from 'svelte';
import { userQueriesStore } from '$lib/stores/userQueriesStore.ts';
import { t, waitLocale } from 'svelte-i18n';

export let tip: string = '';

const loadTranslations = async () => {
    await waitLocale();
    tip = $t('result.deal.tip');
};

onMount(() => {
    loadTranslations();
});
</script>

{#if !$userQueriesStore.length}
	<p>{tip}</p>
{/if}

<style>
p {
	margin: 0;
}
</style>
