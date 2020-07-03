import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import menu from '@/components/menu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Home',
      component: () => import('@/components/Home.vue')   
    },
    {
      path: '/login',
      name: login,
      component: () => import('@/components/login.vue')
    },
    {
      path: '/register',
      name: register,
      component: () => import('@/components/register.vue')
    },
    {
      path: '/menu',
      name: menu,
      component: () => import('@/components/menu.vue')
    }
  ]
})
