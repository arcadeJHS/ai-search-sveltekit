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
import { searchStore } from '$lib/stores/searchStore.ts';
import { type AllowedLanguages, isAllowedLanguage } from '$lib/types/AllowedLanguages.ts';
import { Styles } from '@sveltestrap/sveltestrap';
import { initLocale } from '$lib/i18n/index.ts';
import { toast, SvelteToast } from '@zerodevx/svelte-toast';

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

$: if ($searchStore.status === 'error' && $searchStore.error) {
	// Show an error notification when the searchStore has an error
	toast.push($searchStore.error, { 
		pausable: true,
		theme: {
			'--toastColor': 'white',
			'--toastBackground': 'rgba(220,53,69,0.9)',
			'--toastBarBackground': '#dc3545'
      }
	})
}
</script>

<Styles />

<SvelteToast />