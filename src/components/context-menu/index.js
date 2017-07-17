import ContextMenu from './context-menu'

const ContextMenuPlugin = {}

ContextMenuPlugin.install = function (Vue) {
  // Vue.component(ContextMenu.name, ContextMenu)

  let Mask = Vue.extend(ContextMenu)
  let div = document.createElement('div')
  let mask = new Mask({
    el: div,
    data () {
      return {menus: []}
    }
  })

  Vue.directive('cmenu', {
    inserted: (el, binding) => {
      mask.$data.menus = binding.value
      console.log(mask)
      el.append(mask.$el)
    }
  })
}

export default ContextMenuPlugin
