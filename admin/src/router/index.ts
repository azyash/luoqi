import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)
const Index = () => import('../views/index.vue')

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Index,
  },
]

const router = new VueRouter({
  routes,
})

export default router
