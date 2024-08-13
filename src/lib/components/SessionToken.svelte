<script lang="ts">
	import { searchStore } from '../stores/SearchStore.ts';
</script>

{#if $searchStore}
  <div>
    <pre>{$searchStore.session}</pre>
  </div>
{/if}
