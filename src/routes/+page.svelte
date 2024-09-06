<script>
  import svelteLogo from '/src/assets/svelte.svg';
  import { searchStore } from '$lib/stores/SearchStore.ts';
  import WcAiSearchAppShell from '$lib/web-components/wc-ai-search-app-shell.svelte';
  import AiSearchChat from '$lib/components/AiSearchChat.svelte';
  import AiSearchResults from '$lib/components/AiSearchResults.svelte';
</script>

<main>
  <div>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>

  <!-- TEST: 
    apiBaseUrl="http://localhost:8099" 
  -->
  <WcAiSearchAppShell
    baseUrl="http://192.168.50.58:9910"
    language="it"
  ></WcAiSearchAppShell>

  <div class="ai-search-container">
    <div class="column left">
      <AiSearchChat messages={$searchStore.messages}></AiSearchChat>
    </div>
  
    <div class="column right">
      <AiSearchResults results={$searchStore.selections}></AiSearchResults>
    </div>
  </div>
</main>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.svelte:hover {
  filter: drop-shadow(0 0 2em #ff3e00aa);
}

.ai-search-container {
	--font-body: Helvetica, 'Trebuchet MS', Verdana, sans-serif;
	--color-text: rgba(18, 18, 18, 0.8);

  display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.2rem;
	height: 100%;
	width: 100%;
	font-family: var(--font-body);
	font-size: 1.2em;
    color: var(--color-text);
}
.ai-search-container * {
    box-sizing: border-box;
}
.column {
	display: flex;
	flex-direction: column;
	overflow-y: hidden;
	padding: 1rem;
}
.left {
	border-right: 1px solid var(--color-text);
}
</style>
