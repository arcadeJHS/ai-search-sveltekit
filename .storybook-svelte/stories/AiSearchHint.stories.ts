import type { Meta, StoryObj } from '@storybook/svelte';
import AiSearchHint from '$lib/components/AiSearchHint.svelte';

const meta = {
    title: 'Svelte Components/AiSearchHint',
    component: AiSearchHint,
    tags: ['autodocs'],
    argTypes: {
        hint: { control: 'text' },
    }
} satisfies Meta<AiSearchHint>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        hint: 'A rock band for a party in Lugano',
    }
};