<svelte:options customElement={{
	tag: 'webcomponent-ai-search-app-shell',
	shadow: 'none',
	props: {
		baseUrl: { reflect: true, type: 'String', attribute: 'base-url' },
		language: { reflect: true, type: 'String', attribute: 'language' }
	},
}} />

<script lang="ts">
import { onMount } from 'svelte';
import { searchStore } from '$lib/stores/SearchStore.ts';
import { type AllowedLanguages, isAllowedLanguage } from '$lib/types/AllowedLanguages.ts';
import { Styles } from '@sveltestrap/sveltestrap';
import { initLocale } from '$lib/i18n/index.ts';

export let baseUrl: string;
export let language: AllowedLanguages;

const init = async () => {
	// LLM does not know CH German
	if (!isAllowedLanguage(language) && String(language) === 'ch') {
		language = 'de';
	}

	initLocale(language);
	await searchStore.start(baseUrl, { language });
};

onMount(init);
</script>

<Styles />