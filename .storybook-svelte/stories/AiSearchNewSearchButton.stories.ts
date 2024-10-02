import type { Meta, StoryObj } from '@storybook/svelte';
import AiSearchNewSearchButton from '$lib/components/AiSearchNewSearchButton.svelte';

const meta = {
    title: 'Components/AiSearchNewSearchButton',
    component: AiSearchNewSearchButton,
    tags: ['autodocs']
} satisfies Meta<AiSearchNewSearchButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};