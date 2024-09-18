<script lang="ts">
import { createEventDispatcher } from 'svelte';
import button from '$lib/styles/button.module.css';

const dispatch = createEventDispatcher();
</script>

<button class={button.linkButton} on:click={() => dispatch('click')} title="Start a new research">
    NUOVA RICERCA
</button>