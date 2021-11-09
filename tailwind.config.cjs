//const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit', // ⚠ Make sure to have this
	purge: ['./src/**/*.svelte'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Nunito', 'sans-serif'],
			display: ['Nunito', 'sans-serif'],
			body: ['Nunito', 'sans-serif']
		},
		extend: {
			//			colors: {
			//				primary: '#EA755E',
			//				secondary: '#BD675F'
			//			}
		}
	},
	daisyui: {
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false
	},
	variants: {
		extend: {}
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')]
};
