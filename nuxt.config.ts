// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      weatherToken: process.env.NUXT_PUBLIC_WEATHER_API ?? ''
    }
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  tailwindcss: {
    cssPath: ['~/assets/css/main.css', { injectPosition: 0 }],
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    viewer: true
  }
});
