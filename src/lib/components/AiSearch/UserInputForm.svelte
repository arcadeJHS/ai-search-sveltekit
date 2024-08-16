<script lang="ts">
import { createEventDispatcher } from 'svelte';
import type { UserInput } from '$lib/types/UserInput.ts';
import { Button } from "$lib/components/ui/button/index.ts";

const dispatch = createEventDispatcher();

let userInput: UserInput;

const dispatchUserInput = (content: UserInput) => {
    if (!userInput) { return; }
    dispatch('userInput', { content });
    userInput = undefined;
};
</script>

<form class="ai-chat-user-input-form" on:submit|preventDefault={() => { dispatchUserInput(userInput); }}>
	<input class="ai-chat-user-input-form-input" bind:value={userInput} />
	<button type="submit" class="ai-chat-user-input-form-button">Ask AI</button>
    <Button type="submit">Click me</Button>
</form>

<style>
.ai-chat-user-input-form {
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
}
.ai-chat-user-input-form-input {
    display: flex;
    flex-grow: 1;
    line-height: 2em;
    padding: 0 0.5rem;
    font-family: var(--font-body);
    font-size: 0.8em;
    border: 1px solid var(--color-text);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.ai-chat-user-input-form-button {
    margin-left: 0.1rem;
    background: white;
    font-family: var(--font-body);
    font-size: 0.8em;
    border: 1px solid var(--color-text);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
</style>
