<svelte:options customElement={{
	tag: 'webcomponent-ai-search-error-notification',
	shadow: 'none'
}} />

<script lang="ts">
import { searchStore } from '$lib/stores/searchStore.ts';
import AiSearchErrorNotification from '$lib/components/AiSearchErrorNotification.svelte';

$: status = $searchStore.status ?? '';
$: error = $searchStore.error ?? '';
</script>

<AiSearchErrorNotification {status} {error} />