import MNav from './nav'
import MNavItem from './nav-item'
import MNavbar from './navbar'

const MNavPlugin = {}

MNavPlugin.install = function (Vue) {
  Vue.component(MNav.name, MNav)
  Vue.component(MNavItem.name, MNavItem)
  Vue.component(MNavbar.name, MNavbar)
}

export default MNavPlugin

