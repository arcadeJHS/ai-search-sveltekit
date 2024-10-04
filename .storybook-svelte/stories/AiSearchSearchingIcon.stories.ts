import type { Meta, StoryObj } from '@storybook/svelte';
import AiSearchSearchingIcon from '$lib/components/AiSearchSearchingIcon.svelte';

const meta = {
    title: 'Svelte Components/AiSearchSearchingIcon',
    component: AiSearchSearchingIcon,
    tags: ['autodocs'],
    argTypes: {
        searching: { control: 'boolean' }
    }
} satisfies Meta<AiSearchSearchingIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        searching: true
    }
};