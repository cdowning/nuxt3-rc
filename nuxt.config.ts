import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,

    target: 'static',

    tailwindcss: {
        cssPath: '~/assets/scss/tailwind.scss',
        exposeConfig: true,
    },

    buildModules: ['@nuxtjs/tailwindcss'],
});
