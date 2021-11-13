module.exports = {
	core: {
		builder: 'webpack5'
	},
	svelteOptions: {
		preprocess: preprocess()
	}
	// Rest of the configuration here
};
