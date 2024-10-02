import type { StorybookConfig } from '@storybook/sveltekit';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
	stories: ['./stories/**/*.mdx', './stories/**/*.stories.@(js|ts|svelte)'],
	addons: [
		'@storybook/addon-svelte-csf',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-viewport',
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	refs: {
        'svelte-components': {
          title: 'Svelte Components',
          url: 'http://localhost:6006',
          expanded: true
        },
		'web-components': {
          title: 'Web Components',
          url: 'http://localhost:6007',
          expanded: true
        },
    },
	viteFinal: async (config) => {
        return mergeConfig(config, {
            server: {
                fs: {
                    allow: [
                        // Allow serving files from the project root
                        path.resolve(__dirname, '..')
                    ]
                }
            }
        });
    }
};
export default config;
