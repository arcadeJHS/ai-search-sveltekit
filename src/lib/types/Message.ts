export enum MessageRole {
    User = 'user',
    Agent = 'agent',
}

export type Message = {
	role: MessageRole;
	content: string;
};

export type UserMessage = {
	role: MessageRole.User;
	content: string;
};