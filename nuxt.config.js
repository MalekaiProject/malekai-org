import colors from 'vuetify/es5/util/colors'

module.exports = {
  ssr: true,
  server: {
    port: 5500,
    host: '0.0.0.0'
  },
  head: {
    titleTemplate: 'Malekai - %s ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Malekai' },
      {
        property: 'og:description',
        content: 'The Premier Crowfall Resource.'
      },
      {
        property: 'og:image',
        content: '/images/malekai-splash.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css'
      }
    ]
  },
  loading: { color: '#000' },
  css: ['@/assets/css/tailwind.css', '@/assets/css/malekai.css'],
  plugins: [],
  modules: ['@nuxtjs/axios', '@nuxtjs/google-analytics'],
  axios: {},
  googleAnalytics: {
    id: 'UA-111445866-2'
  },
  tailwindcss: {
    exposeConfig: true
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
    ['@teamnovu/nuxt-breaky', { enabled: true, colorScheme: 'light' }],
    '@nuxtjs/vuetify'
  ]
}
