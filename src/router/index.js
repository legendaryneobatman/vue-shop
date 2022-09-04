import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from "@/Pages/MainPage";

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
