<svelte:options customElement={{
	tag: 'webcomponent-ai-search-floating-user-input',
	shadow: 'none'
}} />

<script lang="ts">
    import AiSearchUserInputForm from '$lib/components/AiSearchUserInputForm.svelte';
    import { searchStore } from '$lib/stores/SearchStore.ts';
    import { userMessagesStore } from '$lib/stores/UserMessagesStore.ts';
    import type { UserInput } from '$lib/types/UserInput.ts';
    import { type Message, MessageRole } from '$lib/types/Message.ts';

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

<div 
    class="wc-ai-search-floating-user-input"
    class:wc-ai-search-floating-user-input--fixed={$userMessagesStore.length > 0}
    class:wc-ai-search-floating-user-input--static={$userMessagesStore.length <= 0}>
    <div>
        <AiSearchUserInputForm
            --textarea-height="6rem"
            isFollowup={$userMessagesStore.length > 0}
            on:userInput={onUserInput} />
    </div>
</div>

<style>
.wc-ai-search-floating-user-input {
    width: 100%;
    padding: 0.5rem;
}
.wc-ai-search-floating-user-input > div {
    padding: 0.5rem;
    border-radius: 0.25rem;
    background-color: #f8f9fa;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
}
.wc-ai-search-floating-user-input--static {
    display: flex;
    justify-content: center;
}
.wc-ai-search-floating-user-input--static > div {
    flex-grow: 1;

    @media (min-width: 768px) {
        max-width: 30vw;
    }
}
/* :global(.wc-ai-search-floating-user-input--static textarea) {
    height: 6rem;
} */
.wc-ai-search-floating-user-input--fixed {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

    @media (min-width: 768px) {
        max-width: 33vw;
    }
}
</style>