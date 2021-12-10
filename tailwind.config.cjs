const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit', // ⚠ Make sure to have this
	purge: ['./src/**/*.svelte'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			title: ['Libre Baskerville', 'serif'],
			body: ['Source Sans Pro', 'sans-serif']
		},
		extend: {
			colors: {
				lightBlue: colors.sky,
				cyan: colors.cyan
			}
		}
	},
	variants: {
		backgroundColor: ['responsive', 'focus', 'hover'],
		borderColor: ['responsive', 'focus', 'hover'],
		extend: {
			backgroundColor: ['active'],
			textColor: ['active']
		}
	},
	plugins: [
		require('@tailwindcss/typography')
		//require('@tailwindcss/forms'),
		//require('@tailwindcss/line-clamp')
	]
};
