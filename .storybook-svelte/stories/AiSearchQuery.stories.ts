import type { Meta, StoryObj } from '@storybook/svelte';
import AiSearchQuery from '$lib/components/AiSearchQuery.svelte';
import type { UserQuery } from '../../src/lib/types/UserQuery.ts';
import { MessageRole } from '../../src/lib/types/Message.ts';

const meta = {
    title: 'Components/AiSearchQuery',
    component: AiSearchQuery,
    tags: ['autodocs'],
    argTypes: {
        active: { control: 'boolean' },
        query: { control: 'object' }
    }
} satisfies Meta<AiSearchQuery>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultQuery: UserQuery = {
    key: '000-111-222',
    content: 'A rock band for a party in Lugano',
    role: MessageRole.User,
    resultsCount: 10
};

export const Default: Story = {
    args: {
        active: false,
        query: defaultQuery
    }
};

export const Active: Story = {
    args: {
        active: true,
        query: defaultQuery
    }
};

export const OneResult: Story = {
    args: {
        active: false,
        query: { 
            ...defaultQuery,
            resultsCount: 1
        }
    }
};

export const NoResults: Story = {
    args: {
        active: false,
        query: { 
            ...defaultQuery,
            resultsCount: 0
        }
    }
};