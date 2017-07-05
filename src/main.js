
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import ElementUI from 'element-ui'

Vue.use(Vuex)
Vue.use(ElementUI)

import DropdownPlugin from './components/dropdown'

Vue.use(DropdownPlugin)

/**
* 解决ie不等低端浏览器不支持babel特性
* npm install babel-polyfill --save
**/
import 'babel-polyfill'

// 注册指令
import './directive'

import 'element-ui/lib/theme-default/index.css'

import './assets/ui/export.less';

import './assets/common.css'

import store from './vuex'


router.beforeEach((to, from, next) => {
  var user = window.sessionStorage.getItem('token')
  var params = {}
  console.log(to, user)
  var noAuthRoutes = ['login', '404']
  if (!user && noAuthRoutes.indexOf(to.name) === -1) {
    router.push({path: '/login', params: params})
  }
  next()
});

/*
Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if (response.body && ~~response.body.ret == -999) {
      let params = {
        errStatus: 401,
        errMsg: response.body.msg,
        url: response.body.url
      }
      window.sessionStorage.removeItem('token')
      router.push({name: 'error', params: params})
    }
  })
})
*/


Vue.config.productionTip = false
let debug = process.env.NODE_ENV !== 'production'
console.log('调试模式：', debug)
/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
// 调试
if (debug) window.app = app
