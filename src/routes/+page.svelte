<script>
    import svelteLogo from '../assets/svelte.svg';
    import Counter from '$lib/components/Counter.svelte';
    import ChatSearch from '$lib/components/ChatSearch.svelte';
</script>

<main>
    <div>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
    </div>
  
    <div class="card">
      <Counter />
    </div>
  
    <div class="card">
      <ChatSearch />
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
</style>