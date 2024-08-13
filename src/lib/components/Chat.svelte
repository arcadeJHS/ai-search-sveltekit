<script lang="ts">
import { tick } from 'svelte';
import UserInputForm from './UserInputForm.svelte';

export let messages;
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
    <UserInputForm on:userInput />
</div>

<style>
.ai-chat {
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