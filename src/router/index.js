import Vue from 'vue'
import Router from 'vue-router'
import {syncPage, page, parentRoute} from '@/utils/fun'
import uiRoutes from './ui'

Vue.use(Router)


// 定义ui路由出口
let uiView = Vue.component('ui-view', {
  template: '<div class="body" style="background: #F0F3F4"><router-view></router-view></div>'
})



import adminRouterView from '@/pages/admin'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: page('login')
    },
    {
      path: '/admin',
      name: 'admin',
      component: page('demo/admin')
    },
    {
      path: '/utils',
      name: 'utils',
      component: page('demo/utils')
    },
    {
      path: '/demo',
      name: 'utils',
      component: page('demo/demo')
    }
  ].concat(
    parentRoute('/', [
      {
        path: '/',
        name: 'home',
        component: syncPage('home')
      }
    ], {requiresAuth: true}, adminRouterView),
    parentRoute('/ui', uiRoutes, {}, uiView)
  ).concat(
    {
      path: '*',
      name: '404',
      component: page('common/404')
    }
  )
})
