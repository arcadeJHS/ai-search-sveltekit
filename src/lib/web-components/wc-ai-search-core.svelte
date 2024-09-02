<svelte:options customElement={{
	tag: 'PREFIX-ai-search-core',
	shadow: 'none',
	props: {
		apiBaseUrl: { reflect: true, type: 'String', attribute: 'api-base-url' },
		language: { reflect: true, type: 'String', attribute: 'language' }
	},
}} />

<script lang="ts">
	import type { AllowedLanguages } from '$lib/types/AllowedLanguages.ts';
	import AiSearchCore from '$lib/components/AiSearchCore.svelte';

	export let apiBaseUrl: string;
	export let language: AllowedLanguages;
</script>

<AiSearchCore
	apiBaseUrl={apiBaseUrl}
	language={language}
></AiSearchCore>
