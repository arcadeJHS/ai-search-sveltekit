import type { Meta, StoryObj } from '@storybook/svelte';
import AiSearchSuggestions from '$lib/components/AiSearchSuggestions.svelte';
import { type FilterSuggestion, FilterType } from '../../src/lib/types/Filter.ts';

const meta = {
    title: 'Components/AiSearchSuggestions',
    component: AiSearchSuggestions,
    tags: ['autodocs'],
    argTypes: {
        filters: { control: 'object' },
        suggestionsVisible: { control: 'boolean' }
    }
} satisfies Meta<AiSearchSuggestions>;

export default meta;

type Story = StoryObj<typeof meta>;

const filters: FilterSuggestion = {
    query: 'A rock band for a party in Lugano',
    applied: [{
        f: FilterType.ARTIST_GENRE,
        k: 2,
        v: 'Rock',
        i: false
    }],
    notApplied: [
        FilterType.ARTIST_TYPE,
        FilterType.WHEN,
        FilterType.ARTIST_SUB_TYPE,
        FilterType.LOCATION
    ],
    suggestions: {
        [FilterType.ARTIST_TYPE]: [1, 2, 3],
        [FilterType.WHEN]: ['suggestion'],
        [FilterType.ARTIST_SUB_TYPE]: [1,2,3],
        [FilterType.LOCATION]: ['zurich', 'lugano', 'geneva']
    }
};

export const Default: Story = {
    args: {
        filters
    }
};

export const OnMobile: Story = {
    args: {
        filters
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
        filters,
        suggestionsVisible: false
    }
};