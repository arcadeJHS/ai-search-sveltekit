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
		options: {
			// Sort stories in the sidebar
			storySort: (a, b) => {
				// 'Docs' before
				if (a.type === 'docs' && b.type !== 'docs') {
					return -1;
				}
				if (a.type !== 'docs' && b.type === 'docs') {
					return 1;
				}

				// If both are 'docs' or neither are 'docs', sort alphabetically
				return a.id === b.id ? 0 : a.id.localeCompare(b.id, { numeric: true });
			}
		}
	},
	decorators: [
		withI18n
	]
};

export default preview;