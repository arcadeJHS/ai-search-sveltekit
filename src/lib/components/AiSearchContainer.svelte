<svelte:options customElement={{
	tag: 'PREFIX-ai-search-container',
	props: {
		apiBaseUrl: { reflect: true, type: 'String', attribute: 'api-base-url' },
		language: { reflect: true, type: 'String', attribute: 'language' }
	},
}} />

<script lang="ts">
	import { onMount } from 'svelte';
	import { searchStore } from '../stores/SearchStore.ts';
	import { type AllowedLanguages } from '$lib/types/AllowedLanguages.ts';
    import SessionToken from './SessionToken.svelte';

	export let apiBaseUrl: string;
	export let language: AllowedLanguages;

	onMount(async () => {
		await searchStore.start({ apiBaseUrl, language });
	});
</script>

<div class="ai-search-container">
    <pre>{JSON.stringify($searchStore, null, 2)}</pre>

	<SessionToken></SessionToken>
</div>

<style>
.ai-search-container {
    padding: 0.5rem;
    border: 1px solid #ccc;
}
</style>