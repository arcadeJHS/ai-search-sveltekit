import type { Preview } from '@storybook/svelte';
import { setContext } from 'svelte';
import { t as mockT } from './mocks.ts';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import './global.css';

// Mock the svelte-i18n `t` function globally
const withI18n = (Story, context) => {
	setContext('svelte-i18n', { t: mockT });
	return Story(context);
};

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		viewport: {
			viewports: INITIAL_VIEWPORTS,
		},
	},
	decorators: [
		withI18n
	]
};

export default preview;