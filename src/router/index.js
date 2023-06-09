import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/play',
    name: 'play',
    component: () => import('../views/play/index.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
