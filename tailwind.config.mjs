/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default{
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',],
	theme: {
		extend: {
			colors: {
				'primary': '#FF914C',
				'primary_2': '#eb4d4b',
				'secondary': '#999999',
				'success': '#1E8449',
				'danger': '#df2234',
				'warning': '#ffc107',
				'info': '#2086FF',
				'light': '#ffffff',
				'dark': '#2E4053',
				'darker': '#212F3C',
				'success_l': '#FF5733',
				'nico':'#DD5D5C',
				'nico2': '#FF914C'

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
};

