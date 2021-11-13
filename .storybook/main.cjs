module.exports = {
	core: {
		builder: 'storybook-builder-vite'
	},
	stories: ['../src/components/**/*.stories.js'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
	svelteOptions: {
		preprocess: require('../svelte.config.cjs').preprocess
	}
};
