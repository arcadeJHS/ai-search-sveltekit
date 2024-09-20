<script>
  import WcAiSearchAppShell from '$lib/web-components/wc-ai-search-app-shell.svelte';
  import WcAiSearchMessages from '$lib/web-components/wc-ai-search-messages.svelte';
  import WcAiSearchResults from '$lib/web-components/wc-ai-search-results.svelte';
  import WcAiSearchFloatingUserInput from '$lib/web-components/wc-ai-search-floating-user-input.svelte';
  // import WcAiSearchFloatingUserInputVariant from '$lib/web-components/wc-ai-search-floating-user-input.svelte';
  import WcAiSearchNewSearchButton from '$lib/web-components/wc-ai-search-new-search-button.svelte';
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
  <!-- <WcAiSearchFloatingUserInputVariant /> -->

  <div class="container">
    <div class="row">
      <div class="col-12">

        <div class="site-ai-search">
          <div class="site-ai-search__column site-ai-search__column--left">
            <div class="site-ai-search__messages">
              <div class="site-ai-search__messages__new-search-button">
                <WcAiSearchNewSearchButton />
              </div>
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
  /* grid-template-columns: fr 5fr; */
  gap: 0.2rem;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 5fr; 
  }
}
.site-ai-search * {
  box-sizing: border-box;
}
.site-ai-search__column {
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
}
.site-ai-search__messages {
  /* max-height: 45vh; */
  display: none;
  
  @media (min-width: 768px) {
    display: block; 
  }
}
.site-ai-search__messages__new-search-button {
  margin: 0.8rem 0;
}
</style>