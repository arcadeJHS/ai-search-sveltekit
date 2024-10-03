<script lang="ts">
import { createEventDispatcher, onMount, tick } from 'svelte';
import type { UserInput } from '$lib/types/UserInput.ts';
import input from '$lib/styles/input.module.css';
import text from '$lib/styles/text.module.css';
import textarea from '$lib/styles/textarea.module.css';
import button from '$lib/styles/button.module.css';
// import { observeElementHeight } from '../utils/index.js';
import Fa from 'svelte-fa';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { t, waitLocale } from 'svelte-i18n';

export let placeholder: string = '';
export let followUpPlaceholder: string = '';
export let isFollowup: boolean = false;
export let textareaShouldBeFocused: boolean = true;
export let disableTextarea: boolean = false;

const dispatch = createEventDispatcher();

let textareaEl: HTMLTextAreaElement;
let submitButtonContainerEl: HTMLElement;
let userInput: UserInput;
let initialTextareaHeight: string;

const resetTextareaHeight = () => {
    textareaEl.style.height = 'auto';
};

const resize = () => {
    if (!textareaEl) { return; }

    resetTextareaHeight();

    if (!isFollowup && textareaEl.scrollHeight < parseFloat(initialTextareaHeight)) { 
        textareaEl.style.height = initialTextareaHeight;
        return; 
    }

    if (userInput) {
        textareaEl.style.height = `${textareaEl.scrollHeight}px`;
    }
};

const dispatchUserInput = (content: UserInput) => {
    if (!userInput) { return; }
    dispatch('userInput', { content });
    userInput = undefined;
    resetTextareaHeight();
    textareaEl.blur();
};

const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        dispatchUserInput(userInput);
    }
};

const loadTranslations = async () => {
    await waitLocale();
    placeholder = $t('search_input.placeholder');
    followUpPlaceholder = $t('search_input.placeholder_followup');
};

const focusTextArea = async () => {
    await tick();
    textareaEl.focus();
};

onMount(() => {
    loadTranslations();

    // set initial textarea height when the component is mounted
    initialTextareaHeight = textareaEl.clientHeight + 'px';
    textareaEl.style.height = initialTextareaHeight;

    // const observeSubmitButtonContainer = observeElementHeight(submitButtonContainerEl, (element: HTMLElement, height: number) => {
    //     const threshold = 43;
    //     element.style.alignItems = height > threshold ? 'flex-end' : 'center';
    //     element.style.paddingBottom = height > threshold ? '0.4rem' : '0';
    // });

    // return () => {
    //     if (observeSubmitButtonContainer) observeSubmitButtonContainer();
    // };
});

$: isFollowup, resize();

$: if (textareaShouldBeFocused && textareaEl) {
    focusTextArea();
}
</script>

<form 
    class="ai-search-user-input-form"
    on:submit|preventDefault={() => { dispatchUserInput(userInput); }}>

    <textarea
        name="user-input"
        class={`${text.base} ${input.noBorder} ${textarea.limitMaxHeight}`}  
        rows="1"
        on:input={resize}
        on:keydown={handleKeyDown}
        bind:value={userInput}
        bind:this={textareaEl} 
        placeholder={isFollowup ? followUpPlaceholder : placeholder}
        disabled={disableTextarea} />

    <div class="ai-search-user-input-form__submit-container" bind:this={submitButtonContainerEl}>
        <button type="submit" disabled={!userInput || disableTextarea} class={button.iconButton}>
            <Fa icon={faPaperPlane} />
        </button>
    </div>
</form>

<style>
.ai-search-user-input-form {
    display: flex;
    border: 1px solid #dee2e6;
    background-color: #ffffff;
    border-radius: 0.5rem;
}
.ai-search-user-input-form textarea {
    justify-content: space-between;
    gap: 1rem;
    background-color: #ffffff;
    padding: 0.9rem 1rem;
    border-radius: 0.5rem;
    flex-grow: 1;
    margin-right: 0.5rem;
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
.ai-search-user-input-form__submit-container {
    display: flex;
    align-items: flex-end;
    padding-bottom: 0.5rem;
    padding-right: 0.5rem;
}
.ai-search-user-input-form__submit-container button {
    background-color: #ffffff!important;    
    font-size: 1.5rem;
    border-radius: 50%;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    cursor: pointer;

    border: 0;
    margin: 0;
    padding: 0;
    padding-right: 0.2rem;
    padding-bottom: 0.2rem;
    width: auto;
    display: flex;
}
.ai-search-user-input-form__submit-container button[disabled] {
    opacity: 0.8;
    cursor: default;
}
.ai-search-user-input-form__submit-container button:hover {
    opacity: 0.8;
}
</style>
