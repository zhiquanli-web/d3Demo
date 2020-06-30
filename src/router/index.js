import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  // basic
  {
    path: '/basic',
    component: Layout,
    meta: { title: '基础图形', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/basic/index',
        name: 'Basic',
        component: () => import('@/views/basic/basic'),
        meta: { title: '多边形'}
      }
    ]
  },
  // advanced
  {
    path: '/advanced',
    component: Layout,
    meta: { title: '进阶图形', icon: 'form' },
    children: [
      {
        path: '/advanced/histogram',
        name: 'Histogram',
        component: () => import('@/views/advanced/histogram'),
        meta: {title: '直方图'}
      },
      {
        path: '/advanced/dendrogram',
        name: 'Dendrogram',
        component: () => import('@/views/advanced/dendrogram'),
        meta: {title: '饼图'}
      },
    ]
  },
  // product
  {
    path: '/product',
    component: Layout,
    redirect: '/thread',
    name: 'Product',
    meta: {
      title: 'Prodyuct',
      icon: 'nested'
    },
    children: [
      {
        path: 'thread',
        component: () => import('@/views/product/thread'),
        name: 'Thread',
        meta: { title: 'Thread' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
