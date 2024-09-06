<svelte:options customElement={{
	tag: 'PREFIX-ai-search-user-input-form',
	shadow: 'none'
}} />

<script lang="ts">
    import AiSearchUserInputForm from '$lib/components/AiSearchUserInputForm.svelte';
    import { searchStore } from '$lib/stores/SearchStore.ts';
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

<div class="fixed-bottom-centered">
    <AiSearchUserInputForm on:userInput={onUserInput}></AiSearchUserInputForm>
</div>

<style>
.fixed-bottom-centered {
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    max-width: 33vw;
    width: 100%;

    z-index: 10;

    background-color: #faf3ee;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 10px 10px 11px -4px rgba(0,0,0,0.16);
}
</style>