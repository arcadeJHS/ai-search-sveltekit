<script lang="ts">
import { createEventDispatcher } from 'svelte';
import Fa from 'svelte-fa';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import button from '$lib/styles/button.module.css';
import { t } from 'svelte-i18n';

const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch('click')} class={`${button.iconButton} wc-ai-search-floating-user-input`} title={$t('user_queries.show')}>
    <Fa icon={faComment} size="2x" />
</button>

<style>
.wc-ai-search-floating-user-input {
    display: var(--ai-search-show-query-offcanvas-button-display, block);
}
</style>