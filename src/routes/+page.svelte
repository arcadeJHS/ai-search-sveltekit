<script>
  import WcAiSearchAppShell from '$lib/web-components/wc-ai-search-app-shell.svelte';
  import WcAiSearchQueries from '$lib/web-components/wc-ai-search-queries.svelte';
  import WcAiSearchResults from '$lib/web-components/wc-ai-search-results.svelte';
  import WcAiSearchFloatingUserInput from '$lib/web-components/wc-ai-search-floating-user-input.svelte';
  // import WcAiSearchFloatingUserInputVariant from '$lib/web-components/wc-ai-search-floating-user-input.svelte';
  import WcAiSearchNewSearchButton from '$lib/web-components/wc-ai-search-new-search-button.svelte';
  import WcAiSearchErrorNotification from '$lib/web-components/wc-ai-search-error-notification.svelte';
</script>

<main>
  <!-- MOCK: 
    apiBaseUrl="http://localhost:8099" 
  -->
  <!-- ONLINE API: 
    apiBaseUrl="http://192.168.50.58:9910" 
  -->
  <WcAiSearchAppShell
    baseUrl="http://192.168.50.58:9910"
    language="it">
  </WcAiSearchAppShell>

  <WcAiSearchFloatingUserInput />
  <!-- <WcAiSearchFloatingUserInputVariant /> -->

  <div class="container">
    <div class="row">
      <div class="col-12">

        <WcAiSearchErrorNotification />

        <div class="site-ai-search">
          <div class="site-ai-search__column site-ai-search__column--left">
            <div class="site-ai-search__queries">
              <div class="site-ai-search__queries-search-button">
                <WcAiSearchNewSearchButton />
              </div>
              <WcAiSearchQueries />
            </div>
          </div>
          
          <div class="site-ai-search__column site-ai-search__results">
            <WcAiSearchResults />
          </div>
        </div>

      </div>
    </div>

  </div>
</main>

<style>
/*
 * You can override css variables also using the :root selector 
 */
/* :root {
  --ai-search-font-base: Montserrat, sans-serif;
} */
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
.site-ai-search__results {
  padding-bottom: 10rem;
}
.site-ai-search__queries {
  /* max-height: 45vh; */
  display: none;
  
  @media (min-width: 768px) {
    display: block; 
  }
}
.site-ai-search__queries-search-button {
  margin: 0.8rem 0;
}
</style>