import type { Meta, StoryObj } from '@storybook/svelte';
import AiSearchNewSearchButton from '../../src/lib/components/AiSearchNewSearchButton.svelte';

const meta = {
    title: 'Svelte Components/AiSearchNewSearchButton',
    component: AiSearchNewSearchButton,
    tags: ['autodocs']
} satisfies Meta<AiSearchNewSearchButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};