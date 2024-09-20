import { derived, type Readable } from 'svelte/store';
import { type UserMessage, type ExtendedUserMessage, MessageRole } from '$lib/types/Message.ts';
import { searchStore } from './searchStore.ts';

export const userMessagesStore: Readable<ExtendedUserMessage[]> = derived(searchStore, ($searchStore) => {
    const userMessages: UserMessage[] = $searchStore.messages.filter((message): message is UserMessage => message.role === MessageRole.User);

    const messages: ExtendedUserMessage[] = userMessages.map((message: UserMessage): ExtendedUserMessage => ({
        ...message,
        resultsCount: $searchStore.responses[message.key]?.selection.length ?? 0
    }));
    
    return messages;
});