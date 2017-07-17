import ContextMenu from './context-menu'

const ContextMenuPlugin = {}

ContextMenuPlugin.install = function (Vue) {
  // Vue.component(ContextMenu.name, ContextMenu)

  let Mask = Vue.extend(ContextMenu)
  let div = document.createElement('div')
  let mask = new Mask({
    el: div
  })
  console.log(mask)
  Vue.directive('cmenu', {
    inserted: (el) => {
      console.log(el)
      el.append(mask.$el)
    }
  })
}

export default ContextMenuPlugin
