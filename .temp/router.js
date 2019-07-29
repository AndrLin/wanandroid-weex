import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import SplashPage from '@/page/SplashPage'
import MainPage from '@/page/MainPage'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: SplashPage
    },
    {
      path: '/main',
      name: 'main',
      component: MainPage
    }
  ]
})
