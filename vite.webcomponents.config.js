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
		rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') {
                        return 'ai.search.web.components.css';
                    }
                    return assetInfo.name;
                }
            },
			// Ensure tree shaking is enabled
            treeshake: {
                moduleSideEffects: false, // Assume no side effects in modules
                propertyReadSideEffects: false, // Assume no side effects when reading properties
                tryCatchDeoptimization: false // Do not deoptimize try-catch blocks
            }
        },
		outDir: 'dist-web-components'
	},
	plugins: [
		replace({
			preventAssignment: true,
			'webcomponent-': `${LIBRARY_PREFIX ?? 'stg'}-` 
		}),
		svelte({
			compilerOptions: { 
				customElement: true,
				dev: false,
				immutable: true,
				enableSourcemap: false
			} 
		})
	],
	resolve: {
        alias: {
            '$lib': resolve(__dirname, 'src/lib')
        }
    }
});
