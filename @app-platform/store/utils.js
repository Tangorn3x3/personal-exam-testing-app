import appConfig from "@/appConfig";

const initialTopButtonsState = {
  isBackButtonVisible: false,
  isMenuButtonVisible: true,
}

export const state = () => ({
  title: appConfig.appName,

  loading: false,
  dark: false,

  snackbar: false,
  snackbarText: '',

  isBackButtonVisible: initialTopButtonsState.isBackButtonVisible,
  isMenuButtonVisible: initialTopButtonsState.isMenuButtonVisible,
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
  },
  setMenuButtonVisibility(state, visible) {
    state.isMenuButtonVisible = visible
  },
  setBackButtonVisibility(state, visible) {
      state.isBackButtonVisible = visible
  },
  resetTopButtonsState(state) {
      state.isBackButtonVisible = initialTopButtonsState.isBackButtonVisible
      state.isMenuButtonVisible = initialTopButtonsState.isMenuButtonVisible
  }
}

export default {
  state, actions, mutations, namespaced: true
}