//const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit', // ⚠ Make sure to have this
	content: ['./src/**/*.svelte', './src/**/*.html'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {}
	},
	variants: {},
	plugins: [require('@tailwindcss/typography')]
};
