import { derived, type Readable } from 'svelte/store';
import { type UserMessage, MessageRole } from '$lib/types/Message.ts';
import { searchStore } from './SearchStore.ts';

export const userMessagesStore: Readable<UserMessage[]> = derived(searchStore, ($searchStore) => <UserMessage[]>$searchStore.messages.filter(message => message.role === MessageRole.User));