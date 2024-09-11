<script lang="ts">
import { createEventDispatcher, onMount } from 'svelte';
import type { UserInput } from '$lib/types/UserInput.ts';
import input from '$lib/styles/input.module.css';
import font from '$lib/styles/font.module.css';
import textarea from '$lib/styles/textarea.module.css';
import AiSearchMessageSubmitButton from './AiSearchMessageSubmitButton.svelte';

export let placeholder: string = "How can I help you organizing your event?";
export let followUpPlaceholder: string = "Do you want to add more details?";
export let isFollowup: boolean = false;

const dispatch = createEventDispatcher();

let inner: HTMLTextAreaElement;
let userInput: UserInput;
let initialTextareaHeight: string;

const resetTextareaHeight = () => {
    inner.style.height = 'auto';
};

const resize = () => {
    resetTextareaHeight();
    
    if (!isFollowup && inner.scrollHeight < parseFloat(initialTextareaHeight)) { 
        inner.style.height = initialTextareaHeight;
        return; 
    }

    if (userInput) {
        inner.style.height = `${inner.scrollHeight}px`;
    }
};

const dispatchUserInput = (content: UserInput) => {
    if (!userInput) { return; }
    dispatch('userInput', { content });
    userInput = undefined;
    resetTextareaHeight();
};

const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        dispatchUserInput(userInput);
    }
};

onMount(() => {
    // set initial textarea height when the component is mounted
    initialTextareaHeight = inner.clientHeight + 'px';
});
</script>

<form class="ai-search-user-input-form" on:submit|preventDefault={() => { dispatchUserInput(userInput); }}>
    <textarea
        class={`${font.sansSerif} ${input.noBorder} ${textarea.limitMaxHeight}`}  
        rows="1"
        on:input={resize}
        on:keydown={handleKeyDown}
        bind:value={userInput}
        bind:this={inner} 
        placeholder={isFollowup ? followUpPlaceholder : placeholder} />

    <div class="ai-search-user-input-form__submit-container">
        <AiSearchMessageSubmitButton disabled={!userInput} />
    </div>
</form>

<style>
.ai-search-user-input-form {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    background-color: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    padding: 0.5rem;
}
.ai-search-user-input-form__submit-container {
    display: flex;
    align-items: flex-end;
}
textarea {
    width: 100%;

    /*
     * Set the height of the textarea to the initial height (the value for "initialTextareaHeight").
     * You can pass a custom height defining the "--textarea-height" css variable as a prop from parent component:

     * <AiSearchUserInputForm --textarea-height="6rem" />;
     *
     * The default height is 6rem.
     */
    height: var(--textarea-height, "6rem");
}
</style>
