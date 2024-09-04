<svelte:options customElement={{
	tag: 'PREFIX-ai-search-app-shell',
	shadow: 'none',
	props: {
		baseUrl: { reflect: true, type: 'String', attribute: 'base-url' },
		language: { reflect: true, type: 'String', attribute: 'language' }
	},
}} />

<script lang="ts">
	import { onMount } from 'svelte';
	import { searchStore } from '$lib/stores/SearchStore.ts';
	import type { AllowedLanguages } from '$lib/types/AllowedLanguages.ts';
	import { Styles } from '@sveltestrap/sveltestrap';

	export let baseUrl: string;
	export let language: AllowedLanguages;

	onMount(async () => {
		await searchStore.start(baseUrl, { language });
	});
</script>

<Styles />