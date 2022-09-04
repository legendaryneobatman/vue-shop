import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vClickOutside from './directives/v-click-outside'
import store from "./store"

createApp(App)
    .use(router)
    .use(store)
    .directive('click-outside', vClickOutside)
    .mount('#app')
