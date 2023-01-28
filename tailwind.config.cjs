/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				hero: ['Unbounded', 'cursive']
			}
		}
	},
	plugins: [],
	darkMode: 'class',
	future: { hoverOnlyWhenSupported: true }
};
