export default {
  namespaced: true,
  state: () => ({
    isFiltersVisible: false,
    isCartVisible: false,
  }),
  mutations: {
    TOGGLE_FILTERS(state, payload) {
      state.isFiltersVisible = payload
    },
    TOGGLE_CART(state, payload) {
      state.isCartVisible = payload
    },
    HIDE_DIALOGS(state) {
      state.isFiltersVisible = false
      state.isCartVisible = false
    }
  },
  actions: {
    toggleFilters({commit}, payload) {
      commit("TOGGLE_FILTERS", payload)
    },
    toggleCart({commit}, payload) {
      commit("TOGGLE_CART", payload)
    },
    hideDialogs({commit}) {
      commit("HIDE_DIALOGS")
    }
  },
}
