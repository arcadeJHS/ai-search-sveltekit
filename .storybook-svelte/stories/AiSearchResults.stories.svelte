<script context="module" lang="ts">
import type { Meta } from '@storybook/svelte';
import AiSearchResults from '../../src/lib/components/AiSearchResults.svelte';

export const meta = {
    title: 'Svelte Components/AiSearchResults',
    component: AiSearchResults,
    tags: ['autodocs'],
    argTypes: {
        searchStatus: { control: 'text' },
        resultsSet: { control: 'object' },
        currentPlayingVideoId: { control: 'number' },
        itemsToShow: { control: 'number' }
    }
} satisfies Meta<AiSearchResults>;
</script>
    
<script lang="ts">
import { Story, Template } from '@storybook/addon-svelte-csf';
import { type Selection } from '../../src/lib/types/Selection';
import { resultsMock } from '../mocks';

const resultsSet: Selection[] = resultsMock;

const defaultArgs = {
    searchStatus: 'idle',
    resultsSet,
    currentPlayingVideoId: 1,
    itemsToShow: 9
};
</script>
    
<Template let:args>
    <AiSearchResults 
        {...args}
        on:loadVideo
        on:loadVideo={() => console.log('on:loadVideo')}
        on:resultSelected={() => console.log('on:resultSelected')}
    />
</Template>

<Story name="Default" args={defaultArgs} />
    
<Story name="NoResults" args={{
    ...defaultArgs,
    resultsSet: []
}} />

<Story name="Searching" args={{
    ...defaultArgs,
    resultsSet: [],
    searchStatus: 'searching'
}} />