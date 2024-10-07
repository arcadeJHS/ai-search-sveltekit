<script lang="ts">
import { createEventDispatcher } from 'svelte';
import Fa from 'svelte-fa';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import button from '$lib/styles/button.module.css';
import { t } from 'svelte-i18n';

const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch('click')} class={`${button.iconButton} ai-search-queries-offcanvasshow-button`} title={$t('user_queries.show')}>
    <Fa icon={faComment} size="2x" />
</button>

<style>
.ai-search-queries-offcanvasshow-button {
    display: var(--ai-search-show-query-offcanvas-button-display, block);
}
</style>