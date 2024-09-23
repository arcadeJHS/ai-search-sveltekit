<svelte:options customElement={{
	tag: 'webcomponent-ai-search-error-notification',
	shadow: 'none'
}} />

<script lang="ts">
import { searchStore } from '$lib/stores/searchStore.ts';
import { Alert } from '@sveltestrap/sveltestrap';

let showError = false;
let errorMessage = '';

$: if ($searchStore.status === 'error' && $searchStore.error) {
	// Show an error notification when the searchStore has an error
    errorMessage = $searchStore.error;
    showError = true;
} else {
    showError = false;  
    errorMessage = '';
}
</script>

{#if showError && errorMessage}

    <Alert color="danger">{errorMessage}</Alert>
    
{/if}
