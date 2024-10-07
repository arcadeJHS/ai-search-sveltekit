<script context="module" lang="ts">
import type { Meta } from '@storybook/svelte';
import AiSearchPromptArea from '../../src/lib/components/AiSearchPromptArea.svelte';

export const meta = {
    title: 'Svelte Components/AiSearchPromptArea',
    component: AiSearchPromptArea,
    tags: ['autodocs'],
    argTypes: {
        isFollowup: { control: 'boolean' },
        searchStatus: { control: 'select', options: ['idle', 'starting', 'searching', 'error', 'ending'] },
        searchSession: { control: 'text' },
        filters: { control: 'object' }
    }
} satisfies Meta<AiSearchPromptArea>;
</script>

<script lang="ts">
import { Story, Template } from '@storybook/addon-svelte-csf';
import { filtersSuggestionsMock } from '../mocks';

const defaultArgs = {
    isFollowup: false,
    searchStatus: 'idle',
    searchSession: null,
    filters: {}
};
</script>

<Template let:args>
    <AiSearchPromptArea 
        {...args}
        on:resetSearch
        on:resetSearch={() => console.log('on:resetSearch')}
        on:toggleQueriesOffcanvas
        on:toggleQueriesOffcanvas={() => console.log('on:toggleQueriesOffcanvas')} 
        on:userInput
        on:userInput={() => console.log('on:userInput')}
    />
</Template>

<Story name="Default" args={defaultArgs} />

<Story name="FollowUp" args={{ 
    ...defaultArgs, 
    isFollowup: true 
}} />

<Story name="SearchSessionStarted" args={{ 
    ...defaultArgs, 
    isFollowup: true, 
    searchSession: '11-22-33' 
}} />

<Story name="SearchSuggestions" args={{ 
    ...defaultArgs, 
    isFollowup: true, 
    searchSession: '11-22-33',
    filters: filtersSuggestionsMock
}} />

<!-- <Story name="Error" args={{ status: 'error', error: 'An error occurred' }} /> -->