import { StorybookConfig } from '@storybook/web-components-vite';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
	stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|ts|svelte)'],
	addons: [
		'@storybook/addon-svelte-csf',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions'
	],
	framework: '@storybook/web-components-vite',
	viteFinal: async (config) => {
        return mergeConfig(config, {
            server: {
                fs: {
                    allow: [
                        // Allow serving files from the project root
                        path.resolve(__dirname, '..'),
                        // Allow serving files from the specific directory
                        path.resolve(__dirname, '../stories')
                    ]
                }
            }
        });
    }
};
export default config;