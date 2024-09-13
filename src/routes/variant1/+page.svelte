<script>
  import { searchStore } from '$lib/stores/SearchStore.ts';
  import WcAiSearchAppShell from '$lib/web-components/wc-ai-search-app-shell.svelte';
  import WcAiSearchMessages from '$lib/web-components/wc-ai-search-messages.svelte';
  import WcAiSearchResults from '$lib/web-components/wc-ai-search-results.svelte';
  import WcAiSearchFloatingUserInput from '$lib/web-components/wc-ai-search-floating-user-input.svelte';
</script>

<main>
  <!-- MOCK: 
    apiBaseUrl="http://localhost:8099" 
  -->
  <!-- ONLINE API: 
    apiBaseUrl="http://192.168.50.58:9910" 
  -->
  <WcAiSearchAppShell
    baseUrl="http://localhost:8099"
    language="it">
  </WcAiSearchAppShell>

  <WcAiSearchFloatingUserInput />

  <div class="container">
    <div class="row">
      <div class="col-12">

        <div class="site-ai-search">
          <div class="site-ai-search__column site-ai-search__column--left">
            <div class="site-ai-search__messages">
              <WcAiSearchMessages />
            </div>
          </div>
          
          <div class="site-ai-search__column">
            <WcAiSearchResults />
          </div>
        </div>

      </div>
    </div>

  </div>
</main>

<style>
.site-ai-search {
  display: grid;
  grid-template-columns: 2fr 5fr;
  gap: 0.2rem;
  height: 100%;
  width: 100%;
  font-size: 1.2em;
}
.site-ai-search * {
  box-sizing: border-box;
}
.site-ai-search__column {
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
}
.site-ai-search__column--left {
  /* border-right: 1px solid var(--color-text); */
}
.site-ai-search__messages {
  max-height: 45vh;
}
</style>