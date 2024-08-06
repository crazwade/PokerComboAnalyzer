// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from 'url';

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@pinia/nuxt',
		'@nuxt/eslint',
		'@nuxt/ui',
		'@nuxt/image',
		'@nuxt/test-utils/module',
	],
	pinia: {
		storesDirs: ['./stores/**', './custom-folder/stores/**'],
	},
	css: ['~/assets/style/main.css'],
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},
	alias: {
		'@': fileURLToPath(new URL('./', import.meta.url)),
	},
	tailwindcss: {
		configPath: './tailwind.config.cjs',
	},
	app: {
		baseURL: process.env.NODE_ENV === 'development' ? '/' : '/PokerComboAnalyzer',
		pageTransition: { name: 'page' },
	},
});
