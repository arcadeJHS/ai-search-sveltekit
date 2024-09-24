<script>
import Fa from 'svelte-fa';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export let searching = false;
</script>

{#if searching}
	<Fa icon={faSpinner} size="3x" pulse color="#ff6600" />
{/if}