import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)
const Outline = () => import('../views/outline.vue')
const Base = () => import('../views/base.vue')

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Outline,
    redirect: '/base',
    children: [
      {
        path: '/base',
        component: Base,
      },
    ],
  },
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location: any) {
  return (originalPush as any).call(this, location).catch((err: any) => err)
}

const router = new VueRouter({
  routes,
})

export default router
