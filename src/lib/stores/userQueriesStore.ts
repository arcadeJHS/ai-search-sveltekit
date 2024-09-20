import { derived, type Readable } from 'svelte/store';
import { type UserMessage, MessageRole } from '$lib/types/Message.ts';
import { type UserQuery} from '$lib/types/UserQuery.ts';
import { searchStore } from './searchStore.ts';

export const userQueriesStore: Readable<UserQuery[]> = derived(searchStore, ($searchStore) => {
    const userQueries: UserMessage[] = $searchStore.messages.filter((message): message is UserMessage => message.role === MessageRole.User);

    const queries: UserQuery[] = userQueries.map((message: UserMessage): UserQuery => ({
        ...message,
        resultsCount: $searchStore.responses[message.key]?.selection.length ?? 0
    }));
    
    return queries;
});