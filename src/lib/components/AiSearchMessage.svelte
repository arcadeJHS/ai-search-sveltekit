<script lang="ts">
import font from '$lib/styles/font.module.css';
import { _ } from 'svelte-i18n';
import Fa from 'svelte-fa';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import type { ExtendedUserMessage } from '$lib/types/Message.ts';

export let message: ExtendedUserMessage;
</script>

<div class="ai-search-message">
    <p class={`${font.base}`}>{message.content}</p>
    <div class={`${font.base}`}>
        <span>{$_('results', {values: { count: message.resultsCount }})}</span>
        <Fa icon={faChevronRight} size="lg" />
    </div>
</div>
    
<style>
.ai-search-message {
    padding: 0.8rem;
    background-color: #ffffff;
    border: 1px solid #dcdcdd;
    border-radius: 10px;
    border-top-left-radius: 0;
    font-size: 1em;
    /* box-shadow: 2px 3px 0.4rem rgba(0, 0, 0, .15); */
}
.ai-search-message > p {
    font-weight: bold;
    margin-bottom: 0.8em;
    padding-right: 1rem;
}
.ai-search-message > div {
    display: flex;
    justify-content: space-between;
}
.ai-search-message > div > span {
    font-size: 0.9em;
}
</style>