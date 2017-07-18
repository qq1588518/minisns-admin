import {page} from '@/utils/fun'

export default [
  {
    path: '',
    name: 'ui-home',
    component: page('ui/index')
  },
  {
    path: 'form/switch',
    name: 'switch',
    component: page('ui/form/switch')
  },
  {
    path: 'form/btn',
    name: 'btn',
    component: page('ui/form/btn')
  },
  {
    path: 'form/radio',
    name: 'radio',
    component: page('ui/form/radio')
  },
  {
    path: 'form/checkbox',
    name: 'checkbox',
    component: page('ui/form/checkbox')
  },
  {
    path: 'form/input',
    name: 'input',
    component: page('ui/form/input')
  },
  {
    path: 'grid',
    name: 'grid',
    component: page('ui/grid')
  },
  {
    path: 'alert',
    name: 'alert',
    component: page('ui/alert')
  },
  {
    path: 'scrollbar',
    name: 'scrollbar',
    component: page('ui/scrollbar')
  },
  {
    path: 'label',
    name: 'label',
    component: page('ui/label')
  },
  {
    path: 'list-group',
    name: 'list-group',
    component: page('ui/list-group')
  },
  {
    path: 'panel',
    name: 'panel',
    component: page('ui/panel')
  },
  {
    path: 'icon',
    name: 'icon',
    component: page('ui/icon')
  }
]
