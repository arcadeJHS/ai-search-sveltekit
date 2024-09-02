<script lang="ts">
import { searchStore } from '$lib/stores/SearchStore.ts';
import type { UserInput } from '$lib/types/UserInput.ts';
import { type Message, MessageRole } from '$lib/types/Message.ts';
import AiSearchUserInputForm from './AiSearchUserInputForm.svelte';

export let messages;

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
</script>

<div class="ai-chat">
    <div class="ai-chat-messages">    
        {#each messages as message}
            <div style="margin: 1rem 0;">
                <pre>{JSON.stringify(message, null, 2)}</pre>
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
}
.ai-chat-messages {
    padding-bottom: 1rem; 
    overflow-y: auto; 
    flex-grow: 1;
}
</style>