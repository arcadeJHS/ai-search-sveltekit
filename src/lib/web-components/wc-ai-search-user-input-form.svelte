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

<AiSearchUserInputForm on:userInput={onUserInput} />