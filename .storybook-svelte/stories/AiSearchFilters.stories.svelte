<script context="module" lang="ts">
import type { Meta } from '@storybook/svelte';
import AiSearchFilters from '../../src/lib/components/AiSearchFilters.svelte';

export const meta = {
    title: 'Svelte Components/AiSearchFilters',
    component: AiSearchFilters,
    tags: ['autodocs'],
    argTypes: {
        appliedFilters: { control: 'object' },
        notAppliedFilters: { control: 'object' },
        isOpen: { control: 'boolean' }
    }
} satisfies Meta<AiSearchFilters>;
</script>

<script lang="ts">
import { Story, Template } from '@storybook/addon-svelte-csf';
import { filtersSuggestionsMock } from '../mocks';
import { type Filter, type SuggestionPool } from '../../src/lib/types/Filter';

const appliedFilters: Filter[] = filtersSuggestionsMock.applied;
const notAppliedFilters: (keyof SuggestionPool)[] = filtersSuggestionsMock.notApplied;

const defaultArgs = {
    appliedFilters,
    notAppliedFilters,
    isOpen: false
};
</script>

<Template let:args>
    <AiSearchFilters {...args} />
</Template>

<Story name="Default" args={defaultArgs} />

<Story name="Open" args={{
    ...defaultArgs,
    isOpen: true
}} />