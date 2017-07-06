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
/**
* 拖拽文件
* v-dropFile="handleDropFile"
**/
Vue.directive('dropFile', {
  inserted: function (el, binding) {
    console.log(el, binding)
    el.addEventListener('dragover', function (e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    }, false)
    el.addEventListener('drop', function (e) {
      e.stopPropagation()
      e.preventDefault()
      if (typeof binding.value === 'function') {
        binding.value(event.dataTransfer.files)
      }
    }, false)
  }
})
