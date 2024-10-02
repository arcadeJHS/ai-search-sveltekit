<script lang="ts">
import { createEventDispatcher } from 'svelte';
import { t } from 'svelte-i18n';
import button from '$lib/styles/button.module.css';
import text from '$lib/styles/text.module.css';

const dispatch = createEventDispatcher();
</script>

<button class={`${text.base} ${button.linkButton}`} on:click={() => dispatch('click')}>
    {$t('new_search')}
</button>