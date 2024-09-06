<script>
  import { searchStore } from '$lib/stores/SearchStore.ts';
  import WcAiSearchAppShell from '$lib/web-components/wc-ai-search-app-shell.svelte';
  import AiSearchChat from '$lib/components/AiSearchChat.svelte';
  import AiSearchResults from '$lib/components/AiSearchResults.svelte';
  import WcAiSearchUserInputForm from '$lib/web-components/wc-ai-search-user-input-form.svelte';
</script>

<main>
  <WcAiSearchAppShell
    baseUrl="http://192.168.50.58:9910"
    language="it">
  </WcAiSearchAppShell>

  <AiSearchChat messages={$searchStore.messages}></AiSearchChat>

  <WcAiSearchUserInputForm></WcAiSearchUserInputForm>

  <AiSearchResults results={$searchStore.selections}></AiSearchResults>
</main>

<style>
  main {
    padding: 1rem;
  }
</style>