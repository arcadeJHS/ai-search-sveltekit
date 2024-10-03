import type { Meta, StoryObj } from '@storybook/svelte';
import AiSearchUserInputForm from '$lib/components/AiSearchUserInputForm.svelte';

const meta = {
    title: 'Components/AiSearchUserInputForm',
    component: AiSearchUserInputForm,
    tags: ['autodocs'],
    argTypes: {
        placeholder: { control: 'text' },
        followUpPlaceholder: { control: 'text' },
        isFollowup: { control: 'boolean' },
        textareaShouldBeFocused: { control: 'boolean' },
        disableTextarea: { control: 'boolean' }
    }
} satisfies Meta<AiSearchUserInputForm>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs = {
    placeholder: 'How can I help you?',
    followUpPlaceholder: 'Are you going to add more details?',
    isFollowup: false,
    textareaShouldBeFocused: true,
    disableTextarea: false
};

export const Default: Story = {
    args: defaultArgs
};

export const FollowUp: Story = {
    args: {
        ...defaultArgs,
        isFollowup: true
    }
};