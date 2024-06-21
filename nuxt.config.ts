// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from 'url';

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxt/ui'],
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
});
