import {sortOptions, switchesOptions,} from "@/settings/productsSortOptions";
import {products} from "@/static/products";

export default {
  namespaced: true,
  state: () => ({
    selectedProducts: [],
    filteredProducts: [],
    selectedFilterOptions: [],
    selectedSortOption: {...sortOptions[0]},
  }),
  mutations: {
    ADD_PRODUCT(state, product) {
      const productIndex = state.selectedProducts.findIndex((element) => element.id === product.id)
      if (productIndex >= 0) {
        state.selectedProducts[productIndex].count += 1
      } else {
        state.selectedProducts.push({...product, count: 1})
      }
    },
    DISABLE_PRODUCT(state, product) {
      const productIndex = state.selectedProducts.findIndex((element) => element.id === product.id)
      state.selectedProducts[productIndex] = {
        ...state.selectedProducts[productIndex],
        isDisabled: true,
      }
    },
    ENABLE_PRODUCT(state, product) {
      const productIndex = state.selectedProducts.findIndex((element) => element.id === product.id)
      state.selectedProducts[productIndex] = {
        ...state.selectedProducts[productIndex],
        isDisabled: false,
      }
    },
    INCREMENT_PRODUCT(state, product) {
      const productIndex = state.selectedProducts.findIndex((element) => element.id === product.id)
      state.selectedProducts[productIndex].count += 1;
    },
    DECREMENT_PRODUCT(state, product) {
      const productIndex = state.selectedProducts.findIndex((element) => element.id === product.id)
      let {count} = state.selectedProducts[productIndex]
      if (count) {
        count -= 1
      } else {
        count = 0
      }
      state.selectedProducts[productIndex].count = count;
    },
    UPDATE_FILTER_OPTIONS(state, {key, value}) {
      if (value) {
        state.selectedFilterOptions = [...state.selectedFilterOptions, switchesOptions.find(option => option.value === key)]
      } else {
        state.selectedFilterOptions = state.selectedFilterOptions.filter(el => el.value !== key)
      }
    },
    UPDATE_SORT_OPTION(state, option) {
      state.selectedSortOption = option
    }
  },
  actions: {
    addProduct(context, payload) {
      context.commit('ADD_PRODUCT', payload)
    },
    disableProduct(context, payload) {
      context.commit('DISABLE_PRODUCT', payload)
    },
    enableProduct(context, payload) {
      context.commit('ENABLE_PRODUCT', payload)
    },
    incrementProduct(context, payload) {
      context.commit('INCREMENT_PRODUCT', payload)
    },
    decrementProduct(context, payload) {
      context.commit('DECREMENT_PRODUCT', payload)
    },
    filteredProducts(context) {
      context.commit('FILTERED_PRODUCTS')
    },
    updateFilterOptions(context, payload) {
      context.commit('UPDATE_FILTER_OPTIONS', payload)
    },
    updateSortOption(context, payload) {
      context.commit('UPDATE_SORT_OPTION', payload)
    },
  },
  getters: {
    cartCount: state => {
      return state.selectedProducts.reduce((count, product) => {
        if (!product.isDisabled) {
          return count + product.count
        } else {
          return count
        }
      }, 0)
    },
    cartCountEnding(state, getters) {
      let count;
      if (getters.cartCount) {
        count = getters.cartCount
      } else {
        count = 0
      }
      const lastChar = Number(count.toString().slice(-1))

      if ((lastChar >= 5 && lastChar <= 9) || lastChar === 0 || count >= 11 && count <= 20) return `товаров`
      if (lastChar === 1) {
        return `товар`
      }
      if (lastChar >= 2 && lastChar <= 4) {
        return `товара`
      }
    },
    filteredProducts: state => {
      let filteredProducts = [];
      if (state.selectedFilterOptions) {
        filteredProducts = products.filter((product) => state.selectedFilterOptions.every((option) => product[option.value]))
      } else {
        filteredProducts = products
      }

      return filteredProducts.sort(({price: first}, {price: second}) => state.selectedSortOption.value === 'asc' ? first - second : second - first)
    }
  }


}
