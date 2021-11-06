const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit', // ⚠ Make sure to have this
	purge: ['./src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				sky: colors.sky,
				cyan: colors.cyan
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
