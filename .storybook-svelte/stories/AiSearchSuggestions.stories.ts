import type { Meta, StoryObj } from '@storybook/svelte';
import AiSearchSuggestions from '$lib/components/AiSearchSuggestions.svelte';
import { filtersSuggestionsMock } from '../mocks';

const meta = {
    title: 'Svelte Components/AiSearchSuggestions',
    component: AiSearchSuggestions,
    tags: ['autodocs'],
    argTypes: {
        filters: { control: 'object' },
        suggestionsVisible: { control: 'boolean' }
    }
} satisfies Meta<AiSearchSuggestions>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        filters: filtersSuggestionsMock
    }
};

export const OnMobile: Story = {
    args: {
        filters: filtersSuggestionsMock
    },
    globals: {
        viewport: { value: 'mobile1', isRotated: false },
    },
    parameters: {
        viewport: { defaultViewport: 'mobile1', isRotated: false },
    }
};

export const SuggestionsHidden: Story = {
    args: {
        filters: filtersSuggestionsMock,
        suggestionsVisible: false
    }
};