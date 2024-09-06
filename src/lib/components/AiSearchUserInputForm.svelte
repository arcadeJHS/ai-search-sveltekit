<script lang="ts">
import { createEventDispatcher } from 'svelte';
import type { UserInput } from '$lib/types/UserInput.ts';
import { Button } from '@sveltestrap/sveltestrap';
import input from '$lib/styles/input.module.css';

const dispatch = createEventDispatcher();

let userInput: UserInput;

const dispatchUserInput = (content: UserInput) => {
    if (!userInput) { return; }
    dispatch('userInput', { content });
    userInput = undefined;
};
</script>

<form class="ai-chat-user-input-form" on:submit|preventDefault={() => { dispatchUserInput(userInput); }}>
	<input class={`${input.base} ai-chat-user-input-form-input`} bind:value={userInput} />
    <Button type="submit" color="primary">Search</Button>
</form>

<style>
.ai-chat-user-input-form {    
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
}
.ai-chat-user-input-form-input {
    display: flex;
    flex-grow: 1;
    line-height: 2em;
    padding: 0 0.5rem;
    font-size: 0.8em;
    border-radius: 4px;
}
</style>
