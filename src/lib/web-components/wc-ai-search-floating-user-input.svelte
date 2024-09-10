<svelte:options customElement={{
	tag: 'PREFIX-ai-search-floating-user-input',
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

<div class="position-fixed p-2 wc-ai-search-floating-user-input">
    <div class="shadow rounded p-2 bg-light">
        <AiSearchUserInputForm on:userInput={onUserInput}></AiSearchUserInputForm>
    </div>
</div>

<style>
.wc-ai-search-floating-user-input {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    width: 100%;
    @media (min-width: 768px) {
        max-width: 33vw;
    }

    z-index: 10;
}
</style>