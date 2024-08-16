<svelte:options customElement={{
	tag: 'PREFIX-ai-search-container',
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
	import type { UserInput } from '$lib/types/UserInput.ts';
	import { type Message, MessageRole } from '$lib/types/Message.ts';
	import Chat from './Chat.svelte';
	import SearchResults from './SearchResults.svelte';
	import { Styles } from '@sveltestrap/sveltestrap';

	export let apiBaseUrl: string;
	export let language: AllowedLanguages;

	onMount(async () => {
		await searchStore.start(apiBaseUrl, { language });
	});

	const onUserInput = async (event: CustomEvent) => {
		const content: UserInput = event.detail.content;

		if (!content) {
			return;
		}

		const message: Message = {
			role: MessageRole.User,
			content: content
		};

		searchStore.addMessage(message);

		const responsee = await searchStore.search(content);
	};
</script>

<Styles />

<div class="ai-search-container">
	<div class="column left">
		<!-- <pre>{JSON.stringify($searchStore, null, 2)}</pre> -->

		{#if $searchStore}
			<Chat messages={$searchStore.messages} on:userInput={onUserInput} />
		{/if}
	</div>

	<div class="column right">
		<SearchResults results={$searchStore.selections} />
	</div>
</div>

<style>
.ai-search-container {
	--font-body: Helvetica, 'Trebuchet MS', Verdana, sans-serif;
	--color-text: rgba(18, 18, 18, 0.8);

    display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.2rem;
	height: 100%;
	width: 100%;
	font-family: var(--font-body);
	font-size: 1.2em;
    color: var(--color-text);
}
.ai-search-container * {
    box-sizing: border-box;
}
.column {
	display: flex;
	flex-direction: column;
	overflow-y: hidden;
	padding: 1rem;
}
.left {
	border-right: 1px solid var(--color-text);
}
</style>