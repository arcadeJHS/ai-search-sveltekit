<script lang="ts">
import { tick, onMount } from 'svelte';
import AiSearchMessage from './AiSearchMessage.svelte';

export let messages;

let inner: HTMLDivElement;

const scrollToLastMessage = async () => {
    await tick();
    inner?.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};

$: {
    messages.length;
    scrollToLastMessage();
}

onMount(() => {
    scrollToLastMessage();
});
</script>
    
<!--
Play with bootstrap 5 responsive classes: 
https://getbootstrap.com/docs/5.0/utilities/display/

<div class="ai-chat-messages d-none d-md-block"></div>
-->
<div class="ai-search-messages" bind:this={inner}>    
    {#each messages as message}
        <AiSearchMessage message={message} />
    {/each}
</div>

    
<style>
.ai-search-messages {
    display: flex;
    flex-direction: column-reverse;
    gap: 0.5rem;
}
</style>