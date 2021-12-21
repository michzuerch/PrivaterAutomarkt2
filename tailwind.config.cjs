//const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit', // ⚠ Make sure to have this
	content: ['./src/**/*.svelte', './src/**/*.html'],
	darkMode: 'false', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				title: 'Poppins, sans-serif',
				sans: 'Roboto, sans-serif',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/aspect-ratio'), require('daisyui')],
	daisyui: {
		styled: true,
		themes: false,
		rtl: false,
	},
};
