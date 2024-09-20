<script lang="ts">
import Fa from 'svelte-fa';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import WcAiSearchQueries from '$lib/web-components/wc-ai-search-queries.svelte';
import { Offcanvas } from '@sveltestrap/sveltestrap';
import offcanvas from '$lib/styles/offcanvas.module.css';
import padding from '$lib/styles/padding.module.css';
import button from '$lib/styles/button.module.css';
import { t } from 'svelte-i18n';

let className: string = '';
export { className as class };

let isOpen = false;

const toggle = () => {
    isOpen = !isOpen;
};
</script>

<button on:click={toggle} class={`${button.iconButton} ${className}`} title={$t('user_queries.show')}>
    <Fa icon={faComment} size="2x" color="#2d9bf0" />
</button>

<Offcanvas {isOpen} {toggle} backdrop={false} placement="bottom" class={`${offcanvas.offcanvasBottomShow}`}>
    <WcAiSearchQueries class={padding.noPadding} on:querySelected={toggle} />
</Offcanvas>