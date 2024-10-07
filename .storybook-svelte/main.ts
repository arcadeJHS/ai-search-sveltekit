import type { StorybookConfig } from '@storybook/sveltekit';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
	stories: ['./stories/**/*.mdx', './stories/**/*.stories.@(js|ts|svelte)'],
	features: {
		viewportStoryGlobals: true,
	},
	addons: [
		'@storybook/addon-svelte-csf',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-viewport',
		'@storybook/addon-actions'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
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
