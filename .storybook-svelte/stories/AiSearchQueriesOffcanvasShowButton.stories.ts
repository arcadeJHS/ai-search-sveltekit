import type { Meta, StoryObj } from '@storybook/svelte';
import AiSearchQueriesOffcanvasShowButton from '$lib/components/AiSearchQueriesOffcanvasShowButton.svelte';

const meta = {
    title: 'Components/AiSearchQueriesOffcanvasShowButton',
    component: AiSearchQueriesOffcanvasShowButton,
    argTypes: {
        class: { control: 'text' },
    },
    globals: {
        viewport: { value: 'desktop' },
    }
} satisfies Meta<AiSearchQueriesOffcanvasShowButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const VisibleOnMobile: Story = {
    args: {
        class: 'desktop-hidden',
    },
    globals: {
        viewport: { value: 'mobile1', isRotated: false },
    }
};

export const HiddenOnDesktop: Story = {
    args: {
        class: 'desktop-hidden',
    },
    globals: {
        viewport: { value: 'desktop' },
    }
};