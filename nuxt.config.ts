// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/eslint'],
	pinia: {
		storesDirs: ['./stores/**', './custom-folder/stores/**'],
	},
	eslint: {
		config: {
			stylistic: true,
		},
	},
});
