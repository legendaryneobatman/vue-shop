import {createStore} from "vuex";
import application from "@/store/application"
import products from "@/store/products"

export default createStore({
  modules: {
    application,
    products
  }
})
