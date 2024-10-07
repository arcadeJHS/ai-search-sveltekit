<script context="module" lang="ts">
import type { Meta } from '@storybook/svelte';
import AiSearchHints from '../../src/lib/components/AiSearchHints.svelte';
import { Story, Template } from '@storybook/addon-svelte-csf';

export const meta = {
    title: 'Svelte Components/AiSearchHints',
    component: AiSearchHints,
    tags: ['autodocs'],
    argTypes: {
        hintsToShow: { control: 'number' },
    }
} satisfies Meta<AiSearchHints>;
</script>
    
<Template let:args>
    <AiSearchHints {...args} />
</Template>

<Story name="Default" args={{ hintsToShow: 4 }} />
