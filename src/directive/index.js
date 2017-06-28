import Vue from 'vue'

/**
* 设置网站标题
* v-title="'title'"
**/
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = binding.value
  }
})
