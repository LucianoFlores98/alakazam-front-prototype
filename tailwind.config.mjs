/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary': '#FF914C',
				'primary_2': '#DD5D5C',
				'secondary': '#999999',
				'success': 'rgb(34 197 94 / var(--tw-bg-opacity))',
				'danger': '#df2234',
				'warning': '#ffc107',
				'info': '#2086FF',
				'light': '#ffffff',
			}
		},

	},
	darkMode:"class",
	plugins: [nextui({
		themes: {
			dark: {
				colors: {
					info: {
						DEFAULT: "#BEF264",
						foreground: "#000000",
					},
					focus: "#BEF264",
				},
			},
		},
	})]
}

