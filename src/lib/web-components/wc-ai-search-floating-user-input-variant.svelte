<svelte:options customElement={{
	tag: 'webcomponent-ai-search-floating-user-input-variant',
	shadow: 'none'
}} />

<script lang="ts">
    import { tick } from 'svelte';
    import AiSearchUserInputFormVariant from '$lib/components/AiSearchUserInputFormVariant.svelte';
    import { searchStore } from '$lib/stores/SearchStore.ts';
    import { userMessagesStore } from '$lib/stores/UserMessagesStore.ts';
    import type { UserInput } from '$lib/types/UserInput.ts';
    import { type Message, MessageRole } from '$lib/types/Message.ts';
    import Fa from 'svelte-fa';
    import { faComment } from '@fortawesome/free-regular-svg-icons';
    import WcAiSearchMessages from '$lib/web-components/wc-ai-search-messages.svelte';
    import { Offcanvas } from '@sveltestrap/sveltestrap';
    import offcanvas from '$lib/styles/offcanvas.module.css';
    import padding from '$lib/styles/padding.module.css';

    let inner: HTMLElement;

    const onUserInput = async (event: CustomEvent) => {
        const content: UserInput = event.detail.content;

        if (!content) {
            return;
        }

        const message: Message = {
            role: MessageRole.User,
            content: content
        };

        searchStore.addMessage(message);

        const response = await searchStore.search(content);
    };

    let isOpen = false;

    const toggle = () => {
        isOpen = !isOpen;
    };

    const newSearch = async () => {
        await searchStore.reset();
        await tick();
    };
</script>

<div 
    class="wc-ai-search-floating-user-input"
    class:wc-ai-search-floating-user-input--fixed={$userMessagesStore.length > 0}
    class:wc-ai-search-floating-user-input--static={$userMessagesStore.length <= 0}>
    <div bind:this={inner}>
        {#if $searchStore.session}
            <div class="wc-ai-search-floating-user-input__actions">
                <!-- {$userMessagesStore[($userMessagesStore.length-1)].content} -->
                <button class="wc-ai-search-floating-user-input__actions__new-search" on:click={newSearch}>
                    NUOVA RICERCA
                </button>

                <button on:click={toggle} class="wc-ai-search-floating-user-input__actions__open-messages">
                    <Fa icon={faComment} size="2x" color="#2d9bf0" />
                </button>
            </div>
        {/if}
        <AiSearchUserInputFormVariant
            --textarea-height="6rem"
            isFollowup={$userMessagesStore.length > 0}
            on:userInput={onUserInput} />
    </div>
</div>

<Offcanvas {isOpen} {toggle} backdrop={false} placement="bottom" class={`${offcanvas.offcanvasBottomShow}`}>
    <WcAiSearchMessages class={padding.noPadding} />
</Offcanvas>

<style>
.wc-ai-search-floating-user-input {
    width: 100%;

    @media (min-width: 768px) {
        padding-bottom: 0.5rem;
    }
}
.wc-ai-search-floating-user-input > div {
    background-color: #f8f9fa;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.3);
}
.wc-ai-search-floating-user-input--static {
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.5rem;
}
.wc-ai-search-floating-user-input--static > div {
    flex-grow: 1;
    border-radius: 0.5rem;
    padding: 0.5rem;

    @media (min-width: 768px) {
        max-width: 30vw;
        border-radius: 0.5rem;
    }
}
.wc-ai-search-floating-user-input--fixed {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.5);
    
    border-radius: 0.5rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    @media (min-width: 768px) {
        max-width: 33vw;
        box-shadow: none;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    }
}
.wc-ai-search-floating-user-input--fixed > div {
    border-radius: 0;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    padding: 0.5rem 0.5rem 1.5rem;

    @media (min-width: 768px) {
        border-radius: 0.5rem;
    }
}
.wc-ai-search-floating-user-input__actions {
    display: none;
}
.wc-ai-search-floating-user-input--fixed > div .wc-ai-search-floating-user-input__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.5rem 1rem;
}
.wc-ai-search-floating-user-input__actions__new-search {
    color: #2d9bf0;
    text-decoration: underline;
}
.wc-ai-search-floating-user-input__actions button {
    border: 0;
    margin: 0;
    padding: 0;
    background-color: transparent;    
    cursor: pointer;
}
.wc-ai-search-floating-user-input__actions__open-messages {
    border-radius: 50%;

    @media (min-width: 768px) {
        display: none;
    }
}
</style>