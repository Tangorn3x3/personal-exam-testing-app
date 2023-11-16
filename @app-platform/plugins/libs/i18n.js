import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { initialize } from '../../services/i18nService'

Vue.use(VueI18n)

const savedLocale = localStorage.getItem('locale')

export default (ctx) => {
  let app = ctx.app
  let store = ctx.store
  let $vuetify = ctx.$vuetify

  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: savedLocale || store.state.i18n.locale,
    fallbackLocale: 'ru',
    messages: {
      'ru': require('~/configs/locales/ru.json')
    }
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }

  initialize(app.i18n)

  $vuetify.lang.current = app.i18n.locale
}
