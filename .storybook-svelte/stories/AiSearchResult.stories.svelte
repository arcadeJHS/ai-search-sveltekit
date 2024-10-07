<script context="module" lang="ts">
import type { Meta } from '@storybook/svelte';
import AiSearchResult from '../../src/lib/components/AiSearchResult.svelte';

export const meta = {
    title: 'Svelte Components/AiSearchResult',
    component: AiSearchResult,
    tags: ['autodocs'],
    argTypes: {
        result: { control: 'object' },
        currentPlayingVideoId: { control: 'number' }
    }
} satisfies Meta<AiSearchResult>;
</script>

<script lang="ts">
import { Story, Template } from '@storybook/addon-svelte-csf';
import { type Selection } from '../../src/lib/types/Selection';
import { resultMock } from '../mocks';

const result: Selection = resultMock;

const defaultArgs = {
    result,
    currentPlayingVideoId: 1
};
</script>

<Template let:args>
    <AiSearchResult 
        {...args}
        on:loadVideo
        on:loadVideo={() => console.log('on:loadVideo')}
        on:resultSelected
        on:resultSelected={() => console.log('on:resultSelected')}
    />
</Template>

<Story name="Default" args={defaultArgs} />