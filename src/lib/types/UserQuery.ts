import { type UserMessage } from './Message.ts';

export type UserQuery = UserMessage & {
	resultsCount: number;
};