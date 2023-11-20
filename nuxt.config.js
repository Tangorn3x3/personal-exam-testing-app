import colors from 'vuetify/es5/util/colors'
import ru from 'vuetify/es5/locale/ru'
import packageJson from './package.json'

const SRV_ADDR = 'https://script.google.com/macros/s/AKfycbzdrcAuZijMqesRCgxyjgJ4t4BSOjImqhqKLbf2rqb_DGKE0iX6McR15-wTv8-pukJi-w/exec'
const SRV_MAIN_PATH = '/personal-exam-testing-app/'
export const SRV_PATH = '/personal-exam-testing-app/'

export const APP_NAME = packageJson.name

export default {
  platformApiUrl: SRV_ADDR,

  mode: 'spa',

  head: {
    titleTemplate: '%s',
    title: APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${SRV_PATH}favicon.ico` },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  manifest: {
    name: APP_NAME,
    short_name: APP_NAME,
    description: APP_NAME,
    lang: "ru",
    theme_color: "#9155FD"
  },
  workbox: {
    cacheAssets: false, // for /*
    offline: false // for /_nuxt/*
  },

  pwa: {
    workbox: {
      cacheAssets: false, // for /*
      offline: false // for /_nuxt/*
    }
  },

  css: [
  ],
  router: {
    base: process.env.NODE_ENV === 'production' ? SRV_PATH : '/',
    middleware: ['auth']
  },

  plugins: [
    '~/@app-platform/plugins/libs/vuelidate',
    '~/@app-platform/plugins/libs//validation-mixin',
    '~/@app-platform/plugins/libs/vue-moment',
    '~/@app-platform/plugins/libs/vue-hotkey',
    '~/@app-platform/plugins/mixins',

    '~/@app-platform/plugins/wrappers/axios-wrapper',
    '~/@app-platform/plugins/wrappers/notification-wrapper',

    '~/@app-platform/plugins/wrappers/platform-stores-wrapper',
    '~/@app-platform/plugins/wrappers/platform-api-wrapper',
    '~/@app-platform/plugins/libs/i18n',

    '~/plugins/wrappers/questionServicesWrapper'
  ],

  devModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    'vuetify-dialog/nuxt'
  ],

  axios: {
    proxy: false,
    baseUrl: SRV_ADDR
  },

  auth: {
    google: {
      clientId: '216836867315-81680karuuapm62pvmfgoe3qqifdjkmc.apps.googleusercontent.com'
    },
    localStorage: false,
    strategies: {
      local: {
        user: {
          autoFetch: false
        },
        endpoints: {
          login: { url: SRV_ADDR+'/authenticate', method: 'post', propertyName: 'id_token' },
          user: { url: SRV_ADDR +'/auth_user_info', method: 'get', propertyName: false }
        },
        tokenRequired: true,
        tokenType: ''
      }
    },

    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/'
    }
  },

  loading: { color: '#9155FD', height: '5px' },
  loadingIndicator: { name: 'circle', color: '#c4c4c4', background: '#9155FD' },

  vuetify: {
      customVariables: ['~/assets/variables.scss'],
      lang: {locales: {ru}, current: 'ru'},
      theme: {
          //dark: false,
          themes: {
              dark: {
                  'primary': '#9155FD',
                  'secondary': '#8A8D93',
                  'on-secondary': '#fff',
                  'success': '#56CA00',
                  'info': '#16B1FF',
                  'warning': '#FFB400',
                  'error': '#FF4C51',
                  'background': '#28243D'
              },
              light: {
                'primary': '#9155FD',
                'secondary': '#8A8D93',
                'on-secondary': '#fff',
                'success': '#56CA00',
                'info': '#16B1FF',
                'warning': '#FFB400',
                'error': '#FF4C51',
              }
          }
      }
  },
  server: {
    port: 3030,
  },
  generate: {
    dir: './docs'
  },

  build: {
    extend(config, ctx) {
    }
  }
}
