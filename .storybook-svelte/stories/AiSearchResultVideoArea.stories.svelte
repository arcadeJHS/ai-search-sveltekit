<script context="module" lang="ts">
import type { Meta } from '@storybook/svelte';
import AiSearchResultVideoArea from '../../src/lib/components/AiSearchResultVideoArea.svelte';

export const meta = {
    title: 'Svelte Components/AiSearchResultVideoArea',
    component: AiSearchResultVideoArea,
    tags: ['autodocs'],
    argTypes: {
        result: { control: 'object' },
        currentPlayingVideoId: { control: 'number' }
    }
} satisfies Meta<AiSearchResultVideoArea>;
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
    <AiSearchResultVideoArea 
        {...args}
        on:loadVideo
        on:loadVideo={() => console.log('on:loadVideo')}
    />
</Template>

<Story name="Default" args={defaultArgs} />
