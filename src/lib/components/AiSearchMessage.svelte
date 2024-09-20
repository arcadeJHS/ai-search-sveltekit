<script lang="ts">
import text from '$lib/styles/text.module.css';
import { _ } from 'svelte-i18n';
import Fa from 'svelte-fa';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import type { ExtendedUserMessage } from '$lib/types/Message.ts';
import { createEventDispatcher } from 'svelte';

export let message: ExtendedUserMessage;
export let active: boolean;

const dispatch = createEventDispatcher();
</script>

<button 
    class={`${text.base} ai-search-message`} 
    class:ai-search-message--active={active} 
    on:click={() => dispatch('click')} 
    on:keydown={(e) => e.key === 'Enter' && dispatch('click')} aria-label="Search message"
>
    <p>{message.content}</p>
    <div>
        <span>{$_('results', {values: { count: message.resultsCount }})}</span>
        <Fa icon={faChevronRight} size="lg" />
    </div>
</button>
    
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
.ai-search-message:hover,
.ai-search-message--active {
    background-color: #FF9128;
    color: #ffffff;
} 
.ai-search-message > p {
    font-weight: bold;
    margin-bottom: 0.8em;
    padding-right: 1rem;
    text-align: left;
}
.ai-search-message > div {
    display: flex;
    justify-content: space-between;
}
.ai-search-message > div > span {
    font-size: 0.9em;
}
</style>