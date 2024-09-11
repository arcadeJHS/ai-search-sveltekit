<script lang="ts">
import { createEventDispatcher, onMount } from 'svelte';
import type { UserInput } from '$lib/types/UserInput.ts';
import { Input, Icon } from '@sveltestrap/sveltestrap';
import input from '$lib/styles/input.module.css';
import font from '$lib/styles/font.module.css';
import textarea from '$lib/styles/textarea.module.css';
import button from '$lib/styles/button.module.css';

export let placeholder: string = "How can I help you organizing your event?";
export let followUpPlaceholder: string = "Do you want to add more details?";
export let isFollowup: boolean = false;

const dispatch = createEventDispatcher();

let inner: HTMLDivElement;
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

<form class="d-flex justify-content-between gap-3 bg-white border rounded p-2" on:submit|preventDefault={() => { dispatchUserInput(userInput); }}>
    <Input 
        class={`${font.sansSerif} ${input.noBorder} ${textarea.limitMaxHeight}`} 
        type="textarea" 
        rows="1"
        on:input={resize}
        on:keydown={handleKeyDown}
        bind:value={userInput}
        bind:inner 
        placeholder={isFollowup ? followUpPlaceholder : placeholder} />

    <div class="d-flex fs-2 text-primary align-items-end">
        <button type="submit" class="btn rounded-circle d-flex justify-content-center align-items-center fs-2 text-white border-0" disabled={!userInput}>
            <div class="d-flex justify-content-center align-items-center">
                <Icon name="arrow-up-short" class={`${button.noPadding}`} />
            </div>
        </button>
    </div>
</form>

<style>
button {
    width: 2rem;
    height: 2rem;
    background-color: orange!important;
}
button:hover {
    opacity: 0.8;
}
/* 
 Warning:
 if you want to override a Svelte component css using a class, using traditional css (NOT CSS modules, which already override, as local styles) given the fact the css is scoped to the components, you must use the :global() selector.
 Example:

 <Input class="ai-chat-user-input-form-input" type="textarea" bind:value={userInput} />

 :global(.ai-chat-user-input-form-input) {
    font-size: 0.8em;
    color: #fc0
}
*/
</style>
