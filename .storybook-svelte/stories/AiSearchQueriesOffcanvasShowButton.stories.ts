import type { Meta, StoryObj } from '@storybook/svelte';
import AiSearchQueriesOffcanvasShowButton from '$lib/components/AiSearchQueriesOffcanvasShowButton.svelte';

const meta = {
    title: 'Svelte Components/AiSearchQueriesOffcanvasShowButton',
    component: AiSearchQueriesOffcanvasShowButton,
    globals: {
        viewport: { value: 'desktop' },
    }
} satisfies Meta<AiSearchQueriesOffcanvasShowButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VisibleOnMobile: Story = {
    globals: {
        viewport: { value: 'mobile1', isRotated: false },
    },
    parameters: {
        viewport: { defaultViewport: 'mobile1', isRotated: false },
    },
};

export const HiddenOnDesktop: Story = {
    globals: {
        viewport: { value: 'desktop' },
    },
    parameters: {
        viewport: { value: 'desktop' },
    }
};