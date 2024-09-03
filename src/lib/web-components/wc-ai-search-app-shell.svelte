<svelte:options customElement={{
	tag: 'PREFIX-ai-search-app-shell',
	shadow: 'none',
	props: {
		apiBaseUrl: { reflect: true, type: 'String', attribute: 'api-base-url' },
		language: { reflect: true, type: 'String', attribute: 'language' }
	},
}} />

<script lang="ts">
	import { onMount } from 'svelte';
	import { searchStore } from '$lib/stores/SearchStore.ts';
	import type { AllowedLanguages } from '$lib/types/AllowedLanguages.ts';
	import { Styles } from '@sveltestrap/sveltestrap';

	export let apiBaseUrl: string;
	export let language: AllowedLanguages;

	onMount(async () => {
		await searchStore.start(apiBaseUrl, { language });
	});
</script>

<Styles />