<script>
import Fa from 'svelte-fa';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export let searching = false;
</script>

{#if searching}
	<Fa icon={faSpinner} size="3x" pulse color="rgba(230, 111, 0, 0.6)" />
{/if}