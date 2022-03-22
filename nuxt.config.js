export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CourseKit',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  plugins: [
    { src: '~/plugins/router-after-each.js', mode: 'client' },
    { src: 'plugins/vue-typer.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      '@nuxtjs/recaptcha',
      {
        hideBadge: false,
        version: 3
      }
    ],
    '@nuxtjs/gtm',
  ],

  publicRuntimeConfig: {
    recaptcha: {
      hideBadge: false,
      version: 3,
      siteKey: process.env.RECAPTCHA_SITE_KEY
    },
    gtm: {
      id: process.env.GTM_ID
    },
    formUrl: process.env.FORM_URL,
    dashboardUrl: process.env.DASHBOARD_URL
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      tocDepth: 2
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },

  googleFonts: {
    families: {
      'Readex+Pro': true
    }
  },
}
