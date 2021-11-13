// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};
