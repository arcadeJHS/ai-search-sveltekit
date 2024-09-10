<script>
  import { searchStore } from '$lib/stores/SearchStore.ts';
  import WcAiSearchAppShell from '$lib/web-components/wc-ai-search-app-shell.svelte';
  import WcAiSearchMessages from '$lib/web-components/wc-ai-search-messages.svelte';
  import AiSearchResults from '$lib/components/AiSearchResults.svelte';
  import WcAiSearchFloatingUserInput from '$lib/web-components/wc-ai-search-floating-user-input.svelte';
</script>

<main>
  <WcAiSearchAppShell
    baseUrl="http://192.168.50.58:9910"
    language="it">
  </WcAiSearchAppShell>

  <WcAiSearchMessages></WcAiSearchMessages>

  <WcAiSearchFloatingUserInput></WcAiSearchFloatingUserInput>

  <AiSearchResults results={$searchStore.selections}></AiSearchResults>
</main>

<style>
  main {
    padding: 1rem;
  }
</style>