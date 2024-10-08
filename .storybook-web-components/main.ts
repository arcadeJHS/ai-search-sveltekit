import { StorybookConfig } from '@storybook/web-components-vite';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
	stories: ['./stories/**/*.mdx', './stories/**/*.stories.@(js|ts|svelte)'],
    staticDirs: ['../public', '../static'],
	addons: [
		'@storybook/addon-svelte-csf',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-viewport',
	],
	framework: {
        name: '@storybook/web-components-vite',
        options: {}
    },
    refs: {
		'svelte-components': {
          title: 'SVELTE COMPONENTS',
          url: 'http://localhost:6006',
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
