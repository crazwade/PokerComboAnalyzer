/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// Example content paths...
		// './public/**/*.html',
		// './src/**/*.{js,jsx,ts,tsx,vue}',
	],
	theme: {
		extend: {
			colors: {
				'textColor-mark': '#8d96a0',
				'textColor-default': '#e6edf3',
				'textColor-link': '#1f6feb',
				'bgColor-sidebar': '#161b22',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
