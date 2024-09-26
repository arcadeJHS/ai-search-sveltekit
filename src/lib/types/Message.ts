export enum MessageRole {
    User = 'user',
    Agent = 'agent',
}

export interface BaseMessage {
    key: string;
    content: string;
}

export interface AgentMessage extends BaseMessage {
    role: MessageRole.Agent;
}

export interface UserMessage extends BaseMessage {
    role: MessageRole.User;
}

export type Message = AgentMessage | UserMessage;