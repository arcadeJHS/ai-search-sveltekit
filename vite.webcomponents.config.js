import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import replace from '@rollup/plugin-replace';

const LIBRARY_PREFIX = 'stg';

// const getTimestamp = () => {
// 	const now = new Date();
// 	return `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;
// };

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/lib/index.ts'),
			name: 'AiSearchWebComponents',
			// fileName: (format) => `ai.search.web.components.${getTimestamp()}.${format}.js`,
			fileName: (format) => `ai.search.web.components.${format}.js`,
			formats: ['es', 'umd']
		},
		outDir: 'dist-web-components'
	},
	plugins: [
		replace({
			preventAssignment: true,
			'PREFIX': LIBRARY_PREFIX ?? 'stg',
		}),
		svelte({ 
			compilerOptions: { 
				customElement: true 
			} 
		})
	],
	resolve: {
        alias: {
            '$lib': resolve(__dirname, 'src/lib')
        }
    }
});
