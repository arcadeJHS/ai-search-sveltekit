<script>
  import WcAiSearchAppShell from '$lib/web-components/wc-ai-search-app-shell.svelte';
  import WcAiSearchQueries from '$lib/web-components/wc-ai-search-queries.svelte';
  import WcAiSearchResults from '$lib/web-components/wc-ai-search-results.svelte';
  import WcAiSearchPromptArea from '$lib/web-components/wc-ai-search-prompt-area.svelte';
  import WcAiSearchNewSearchButton from '$lib/web-components/wc-ai-search-new-search-button.svelte';
  import WcAiSearchErrorNotification from '$lib/web-components/wc-ai-search-error-notification.svelte';
  import WcAiSearchHints from '$lib/web-components/wc-ai-search-hints.svelte';
  import WcAiSearchFiltersDebug from '$lib/web-components/wc-ai-search-filters-debug.svelte';
	import { SearchableEntity } from '$lib/types/SearchableEntity.ts';
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
    language="en"
    loadBootstrap={true}>
  </WcAiSearchAppShell>

  <WcAiSearchPromptArea searchFor={SearchableEntity.ARTIST} />

  <div class="site-ai-search__hints">
    <WcAiSearchHints />
  </div>

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
            <WcAiSearchFiltersDebug visible />
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
.site-ai-search__hints {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
:global(.site-ai-search__hints > section) {
  @media (min-width: 768px) {
    max-width: 50vw;
  }

  @media (min-width: 992px) {
    max-width: 30vw;
  }
}
.site-ai-search__column {
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
}
.site-ai-search__results {
  padding-bottom: 16rem;
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