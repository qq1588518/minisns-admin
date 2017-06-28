import Vue from 'vue'
import Router from 'vue-router'
import {asyncLoad, page, parentRoute} from '@/utils/fun'
import uiRoutes from './ui'

Vue.use(Router)


// 定义ui路由出口
let uiView = Vue.component('ui-view', {
  template: '<div class="body" style="background: #F0F3F4"><router-view></router-view></div>'
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: asyncLoad('hello')
    },
    {
      path: '/login',
      name: 'login',
      component: page('login')
    },
    {
      path: '/test',
      name: 'test',
      component: asyncLoad('test')
    },
    {
      path: '/admin2',
      name: 'admin2',
      component: page('demo/admin')
    },
    {
      path: '/admin',
      name: 'admin',
      component: page('demo/admin')
    },
    {
      path: '/page1',
      name: 'page',
      component: page('demo/page1')
    },
    {
      path: '/utils',
      name: 'utils',
      component: page('demo/utils')
    }
  ].concat(
    parentRoute('/', [
      {
        path: 'api',
        name: 'api',
        component: page('demo/apitest')
      }
    ], {requiresAuth: true}, uiView),
    parentRoute('/ui', uiRoutes, {}, uiView)
  ).concat(
    {
      path: '*',
      name: '404',
      component: page('common/404')
    }
  )
})
