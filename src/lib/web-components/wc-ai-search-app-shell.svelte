<svelte:options customElement={{
	tag: 'webcomponent-ai-search-app-shell',
	shadow: 'none',
	props: {
		baseUrl: { reflect: true, type: 'String', attribute: 'base-url' },
		language: { reflect: true, type: 'String', attribute: 'language' },
		loadBootstrap: { reflect: true, type: 'Boolean', attribute: 'load-bootstrap' }
	},
}} />

<script lang="ts">
import { onMount } from 'svelte';
import { searchStore } from '$lib/stores/searchStore.ts';
import { type AllowedLanguages, isAllowedLanguage } from '$lib/types/AllowedLanguages.ts';
import { initLocale } from '$lib/i18n/index.ts';
import BootstrapStyles from '$lib/components/BootstrapStyles.svelte';

export let baseUrl: string;
export let language: AllowedLanguages;
// Bootstrap styles could be already loaded (and in a different version) by the host application.
// So we can decide to load them or not.
export let loadBootstrap = false;

$: requireBootstrap = (typeof loadBootstrap === 'string') ? (loadBootstrap === 'true') : loadBootstrap;

const init = async () => {
	// LLM does not know CH German
	if (!isAllowedLanguage(language) && String(language) === 'ch') {
		language = 'de';
	}

	initLocale(language);
	searchStore.setBaseUrl(baseUrl);
	await searchStore.start({ language });
};

onMount(init);
</script>

{#if requireBootstrap}
	<BootstrapStyles />
{/if}