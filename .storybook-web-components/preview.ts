import type { Preview } from '@storybook/svelte';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
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
				
				return a.id === b.id ? 0 : a.id.localeCompare(b.id, { numeric: true });
			}
		}
	}
};

export default preview;
