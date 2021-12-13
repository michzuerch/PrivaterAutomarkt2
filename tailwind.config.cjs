//const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit', // ⚠ Make sure to have this
	content: ['./src/**/*.svelte', './src/**/*.html'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				primary: 'Poppins, sans-serif',
				sans: 'Roboto, sans-serif'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
