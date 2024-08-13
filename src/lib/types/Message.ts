export enum MessageRole {
    User = 'user',
    Agent = 'agent',
}

export type Message = {
	role: MessageRole;
	content: string;
};