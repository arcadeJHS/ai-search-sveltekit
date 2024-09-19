<script lang="ts">
import font from '$lib/styles/font.module.css';
import { t } from 'svelte-i18n';

export let message;
</script>

<div class="ai-search-message">
    <p class={`${font.base}`}>{message.content}</p>
    <div class={`${font.base}`}>{$t('results')} &gt;</div>
</div>
    
<style>
.ai-search-message {
    padding: 0.5rem 1rem;
    background-color: #ffffff;
    border: 1px solid #dcdcdd;
    border-radius: 10px;
    border-top-left-radius: 0;
    /* box-shadow: 2px 3px 0.4rem rgba(0, 0, 0, .15); */
}
.ai-search-message > p {
    font-weight: bold;
}
.ai-search-message > div {
    color: #2d9bf0;
}
</style>