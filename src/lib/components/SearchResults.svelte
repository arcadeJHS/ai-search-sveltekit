<script lang="ts">
    export let results;
</script>

<div>
    <div>    
        {#each results as result}
            <div style="margin: 1rem 0;">
                <pre>{JSON.stringify(result, null, 2)}</pre>
            </div>
        {/each}
    </div>
</div>
