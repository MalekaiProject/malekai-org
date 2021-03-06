import colors from 'vuetify/es5/util/colors'
const axios = require('axios')

import { API_SERVER } from './constants';

module.exports = {
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
      { rel: 'stylesheet', type: 'text/css', href: '/css/malekai.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/vuetify.min.css' }
    ]
  },
  build: {
    /*analyze: {
      analyzerMode: 'static'
    },*/
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
    ['@teamnovu/nuxt-breaky', { enabled: true, colorScheme: 'light' }],
    '@nuxtjs/vuetify'
  ],
  loading: { color: '#000' },
  css: ['@/assets/css/tailwind.css'],
  modules: ['@nuxtjs/apollo', '@nuxtjs/axios', '@nuxtjs/google-analytics', '@nuxtjs/sitemap'],
  axios: {},
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: API_SERVER,
      }
    }
  },
  googleAnalytics: {
    id: 'UA-111445866-2'
  },
  tailwindcss: {
    exposeConfig: true
  },
  vuetify: {},
  sitemap: {
    path: '/sitemap.xml',
    gzip: true,
    sitemaps: [
      { path: '/sitemap-static.xml', gzip: true },
      {
        path: '/sitemap-disciplines.xml',
        gzip: true,
        exclude: ['/**'],
        routes: async () => {
         
        const disciplines = await axios.get(
          'http://crow.gg',
          {
            params: {
              query: ` query getDisciplines {
              allDisciplines {
                id
              }
            }
          `
            }
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )

          
          return disciplines.data.data.allDisciplines.map(
            discipline => `/disciplines/${discipline.id}`
          )
        }
      },
      {
        path: '/sitemap-powers.xml',
        gzip: true,
        exclude: ['/**'],
        routes: async () => {
          const powers = await axios.get(
          'http://crow.gg',
          {
            params: {
              query: ` query getPowers {
              allPowers {
                id
              }
            }
          `
            }
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
          return powers.data.data.allPowers.map(power => `/powers/${power.id}`)
        }
      }
    ]
  }
}
