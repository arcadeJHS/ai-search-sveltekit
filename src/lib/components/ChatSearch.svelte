<svelte:options customElement="PREFIX-chat-search" />

<script lang="ts">
	import { onMount } from 'svelte';
	import { search } from '../stores/SearchStore.ts';

	onMount(async () => {
		let _search =  await search.start({ language: 'it' });
		search.set(_search);
	});
</script>

<div>
	<pre>{JSON.stringify($search, null, 2)}</pre>
</div>
