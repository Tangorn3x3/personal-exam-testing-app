import appConfig from "@/appConfig";

export const state = () => ({
  title: appConfig.appName,

  loading: false,
  dark: false,

  snackbar: false,
  snackbarText: '',
})

export const actions = {
  showSnackbar({commit}, text) {
    commit('setSnackbar', { snackbar: true, snackbarText: text })
  },
  hideSnackbar({commit}) {
    commit('setSnackbar', { snackbar: false, snackbarText: '' })
  },
  toggleDark({commit, state}) {
      commit('setDark', !state.dark)
  }
}

export const mutations = {
  setLoading (state, loading) {
    state.loading = loading
  },
  setSnackbar (state, { snackbar, snackbarText }) {
    state.snackbar = snackbar
    state.snackbarText = snackbarText
  },
  setDark (state, dark) {
    state.dark = dark
  },
  setTitle(state, title) {
    state.title = title
  }
}

export default {
  state, actions, mutations, namespaced: true
}