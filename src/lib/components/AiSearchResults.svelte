<script lang="ts">
import { type Selection } from '$lib/types/Selection.ts';

export let results: Selection[];
</script>

<div>    

    {#each results as result}
        <div style="margin: 1rem 0;">
            <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
    {/each}

</div>
