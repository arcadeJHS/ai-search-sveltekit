<script lang="ts">
import { createEventDispatcher } from 'svelte';
import { t } from 'svelte-i18n';
import button from '$lib/styles/button.module.css';

const dispatch = createEventDispatcher();
</script>

<button class={button.linkButton} on:click={() => dispatch('click')} title={$t('start_new_search')}>
    {$t('new_search')}
</button>