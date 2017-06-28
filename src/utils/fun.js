// 同步加载
export const syncLoad = name => require('../components/' + name)
// 懒加载模式
export const asyncLoad = name => resolve => require(['../components/' + name], resolve)
// 懒加载page
export const page = name => resolve => require.ensure([], () => resolve(require('../pages/' + name)))
// 注册父路由
export const parentRoute = (base, routes, meta = {}, routeView = asyncLoad('childrenView')) => {
  return {
    path: base,
    meta,
    component: routeView,
    children: routes
  }
}
