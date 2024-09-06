<script lang="ts">
import { tick, onMount } from 'svelte';
import { searchStore } from '$lib/stores/SearchStore.ts';
import type { UserInput } from '$lib/types/UserInput.ts';
import { type Message, MessageRole } from '$lib/types/Message.ts';
import AiSearchUserInputForm from './AiSearchUserInputForm.svelte';

export let messages;

let aiChatMessagesContainer: HTMLDivElement;

const onUserInput = async (event: CustomEvent) => {
    const content: UserInput = event.detail.content;

    if (!content) {
        return;
    }

    const message: Message = {
        role: MessageRole.User,
        content: content
    };

    searchStore.addMessage(message);

    const response = await searchStore.search(content);
};

const scrollToLastMessage = async () => {
  await tick();
  aiChatMessagesContainer?.scrollTo({
    top: aiChatMessagesContainer.scrollHeight,
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

<div class="ai-chat">
    <!--
    Play with bootstrap 5 responsive classes: 
    https://getbootstrap.com/docs/5.0/utilities/display/

    <div class="ai-chat-messages d-none d-md-block"></div>
    -->
    <div class="ai-chat-messages" bind:this={aiChatMessagesContainer}>    
        {#each messages as message}
            <div style="margin: 1rem 0;">
                <pre>{JSON.stringify(message, null, 2)}</pre>
                {#if message.role === MessageRole.Agent}
                    <div>Show results &gt;</div>
                {/if}
            </div>
        {/each}
    </div>

    <!-- forward event to parent element -->
    <AiSearchUserInputForm on:userInput={onUserInput} />
</div>

<style>
.ai-chat {
    --font-body: Helvetica, 'Trebuchet MS', Verdana, sans-serif;
	--color-text: rgba(18, 18, 18, 0.8);

    display: flex; 
    flex-direction: column; 
    flex-grow: 1;
    justify-content: space-between;

    height: 400px;
    max-height: 400px;
    
    color: var(--color-text);

    border: 1px solid orange;
}
.ai-chat-messages {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    /* Parte coi messaggi dal basso, dalla textarea di inserimento msg utente */
    /* justify-content: flex-end; */ 

    overflow-y: auto;
    padding-bottom: 1rem; 
}
</style>