export enum MessageRole {
    User = 'user',
    Agent = 'agent',
}

export interface Message {
	key?: string;
	role: MessageRole;
	content: string;
};

export type UserMessage = Message & {
	role: MessageRole.User;
};