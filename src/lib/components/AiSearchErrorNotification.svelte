<script lang="ts">
import { Alert } from '@sveltestrap/sveltestrap';

export let status = '';
export let error = '';

let showError = false;
let errorMessage = '';

$: if (status === 'error' && error) {
    errorMessage = error;
    showError = true;
} else {
    showError = false;  
    errorMessage = '';
}
</script>

{#if showError && errorMessage}

    <div>
        <Alert color="danger">{errorMessage}</Alert>
    </div>
    
{/if}

<style>
div {
    margin: 0.5rem 0;
}
</style>