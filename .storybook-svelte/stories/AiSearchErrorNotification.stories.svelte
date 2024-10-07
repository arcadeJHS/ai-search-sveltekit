<script context="module" lang="ts">
import type { Meta } from '@storybook/svelte';
import AiSearchErrorNotification from '../../src/lib/components/AiSearchErrorNotification.svelte';
import { Styles } from '@sveltestrap/sveltestrap';
import { Story, Template } from '@storybook/addon-svelte-csf';

export const meta = {
    title: 'Svelte Components/AiSearchErrorNotification',
    component: AiSearchErrorNotification,
    tags: ['autodocs'],
    argTypes: {
        status: { control: 'select', options: ['idle', 'starting', 'searching', 'error', 'ending'] },
        error: { control: 'text' }
    }
} satisfies Meta<AiSearchErrorNotification>;
</script>

<Template let:args>
    <!-- This component requires Sveltestrap styles -->
    <Styles />
    <AiSearchErrorNotification {...args} />
</Template>

<Story name="Default" />

<Story name="Error" args={{ status: 'error', error: 'An error occurred' }} />