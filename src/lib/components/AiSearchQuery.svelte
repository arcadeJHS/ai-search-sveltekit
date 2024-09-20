<script lang="ts">
import text from '$lib/styles/text.module.css';
import { _ } from 'svelte-i18n';
import Fa from 'svelte-fa';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import type { UserQuery } from '$lib/types/UserQuery.ts';
import { createEventDispatcher } from 'svelte';

export let query: UserQuery;
export let active: boolean;

const dispatch = createEventDispatcher();
</script>

<button 
    class={`${text.base} ai-search-query`} 
    class:ai-search-query--active={active} 
    on:click={() => dispatch('click')} 
    on:keydown={(e) => e.key === 'Enter' && dispatch('click')}
>
    <p>{query.content}</p>
    <div>
        <span>{$_('results', {values: { count: query.resultsCount }})}</span>
        <Fa icon={faChevronRight} size="lg" />
    </div>
</button>
    
<style>
.ai-search-query {
    padding: 0.8rem;
    background-color: #ffffff;
    border: 1px solid #dcdcdd;
    border-radius: 10px;
    border-top-left-radius: 0;
    font-size: 1em;
    /* box-shadow: 2px 3px 0.4rem rgba(0, 0, 0, .15); */
}
.ai-search-query:hover,
.ai-search-query--active {
    background-color: #FF9128;
    border-color: #FF9128;
    
} 
.ai-search-query--active {
    cursor: default;
}
.ai-search-query--active > * {
    color: #ffffff;
}
.ai-search-query > p {
    font-weight: bold;
    margin-bottom: 0.8em;
    padding-right: 1rem;
    text-align: left;
}
.ai-search-query > div {
    display: flex;
    justify-content: space-between;
}
.ai-search-query > div > span {
    font-size: 0.9em;
}
</style>