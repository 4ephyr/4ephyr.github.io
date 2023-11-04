/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'ms': {'max': '595px'},
				'ls': {'max': '795pxpx'},
			},
			colors: {
				'primary' : '#F8F8FF',
				'secondary' : '#1B1B1B',
			}
		},
	},
	plugins: [],
}
