<script context="module" lang="ts">
import type { Meta } from '@storybook/svelte';
import AiSearchQueries from '../../src/lib/components/AiSearchQueries.svelte';
import { userQueriesMock } from '../mocks';

export const meta = {
    title: 'Svelte Components/AiSearchQueries',
    component: AiSearchQueries,
    tags: ['autodocs'],
    argTypes: {
        class: { control: 'text' },
        currentResultsSetKey: { control: 'text' },
        queries: { control: 'object' }
    }
} satisfies Meta<AiSearchQueries>;
</script>

<script lang="ts">
import { Story, Template } from '@storybook/addon-svelte-csf';

const defaultArgs = {
    class: '',
    currentResultsSetKey: '111',
    queries: userQueriesMock
};
</script>

<Template let:args>
    <AiSearchQueries 
        {...args}
        on:querySelected
        on:querySelected={() => console.log('on:querySelected')}
    />
</Template>

<Story name="Default" args={defaultArgs} />

<Story name="CustomClass" args={{
    ...defaultArgs,
    class: "background-orange"
}} />