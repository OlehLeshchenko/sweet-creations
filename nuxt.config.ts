// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: ['@nuxt/ui'],
    css: [
        '@/assets/styles/global.css'
    ],
    colorMode: {
        preference: 'light'
    }
})