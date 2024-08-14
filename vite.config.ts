import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

process.env.CUSTOM_ELEMENT = false;

export default defineConfig({
	plugins: [
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
