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
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		styled: true,
		//themes: false,
		base: true,
		utils: true,
		logs: true,
		rtl: false,

		themes: [
			{
				PA: {
					// custom theme
					primary: '#ea5234',
					'primary-focus': '#d43616',
					'primary-content': '#ffffff'
					// other colors
				}
			},
			'dark', // and some pre-defined theme
			'forest',
			'synthwave'
		]
	}
};
