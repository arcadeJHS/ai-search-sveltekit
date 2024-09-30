<script lang="ts">
import Fa from 'svelte-fa';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import text from '$lib/styles/text.module.css';

export let hint: string;
</script>

<div class={`${text.base} ai-search-hint`}>
    <span class="ai-search-hint__icon">
        <Fa icon={faLightbulb} color="#ffd528" />
    </span>
    <p>{hint}</p>
</div>

<style>
.ai-search-hint {
    font-size: 0.8em;
    background-color: var(--ai-search-suggestion-background, #faf3ee);
    border: 1px solid #dcdcdd;
    border-radius: 0.4rem;
    padding: 0.1rem 0.4rem;
    display: flex;
    align-items: start;
}
.ai-search-hint p {
    margin: 0;
    padding-left: 0.2rem;
    opacity: 0.7;
    font-style: italic;
}
.ai-search-hint__icon {
    padding-right: 0.2rem;
}
</style>