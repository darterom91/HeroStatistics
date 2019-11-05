import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  },
  {
    path: '/guia',
    name: 'guia',
    component: () => import(/* webpackChunkName: "Guia" */ '../views/Guia.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
