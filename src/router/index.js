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
    redirect: '/basic/basic',
    meta: { title: '基础图形', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/basic/basic',
        name: 'Basic',
        component: () => import('@/views/basic/basic'),
        meta: { title: '多边形'}
      },
      {
        path: '/basic/histogram',
        name: 'Histogram',
        component: () => import('@/views/basic/histogram'),
        meta: {title: '直方图'}
      },
      {
        path: '/basic/line',
        name: 'Line',
        component: () => import('@/views/basic/line'),
        meta: {title: '折线图'}
      },
      {
        path: '/basic/dendrogram',
        name: 'Dendrogram',
        component: () => import('@/views/basic/dendrogram'),
        meta: {title: '饼图'}
      },
      {
        path: '/basic/area',
        name: 'Area',
        component: () => import('@/views/basic/area'),
        meta: {title: '面积图'}
      },
      {
        path: '/basic/scatterdiagram',
        name: 'Scatterdiagram',
        component: () => import('@/views/basic/scatterdiagram'),
        meta: {title: '散点图'}
      },
      {
        path: '/basic/force',
        name: 'Forece',
        component: () => import('@/views/basic/force'),
        meta: {title: '力导图'}
      },
      {
        path: '/basic/tags',
        name: 'Tags',
        component: () => import('@/views/basic/tags'),
        meta: {title: '标签云图'}
      },
      {
        path: '/basic/three',
        name: 'Three',
        component: () => import('@/views/basic/three'),
        meta: {title: '树状图'}
      },
      {
        path: '/basic/figure',
        name: 'Figure',
        component: () => import('@/views/basic/figure'),
        meta: {title: '树状图'}
      },
    ]
  },
  // advanced
  {
    path: '/advanced',
    component: Layout,
    redirect: '/advanced/china',
    meta: { title: '进阶图形', icon: 'form' },
    children: [
      {
        path: '/advanced/china',
        name: 'China',
        component: () => import('@/views/advanced/china'),
        meta: {title: '简单中国地图'}
      },
      {
        path: '/advanced/combinedbar',
        name: 'Combinedbar',
        component: () => import('@/views/advanced/combinedbar'),
        meta: {title: '组合柱状图'}
      },
      {
        path: '/advanced/stackhistogram',
        name: 'Stackhistogram',
        component: () => import('@/views/advanced/stackhistogram'),
        meta: {title: '堆栈柱状图'}
      },
      {
        path: '/advanced/radialstackbar',
        name: 'Radialstackbar',
        component: () => import('@/views/advanced/radialstackbar'),
        meta: {title: '径向堆栈柱状图'}
      }
    ]
  },
  // product
  {
    path: '/product',
    component: Layout,
    redirect: '/product/thread',
    name: 'Product',
    meta: {
      title: 'Prodyuct',
      icon: 'nested'
    },
    children: [
      {
        path: '/product/thread',
        component: () => import('@/views/product/thread'),
        name: 'Thread',
        meta: { title: 'Thread网络拓扑图' }
      },
      {
        path: '/product/verticalbusiness',
        component: () => import('@/views/product/verticalbusiness'),
        name: 'Verticalbusiness',
        meta: { title: '业务合作关系图' }
      },
      {
        path: '/product/radar',
        component: () => import('@/views/product/radar'),
        name: 'Radar',
        meta: { title: '雷达图' }
      },
      {
        path: '/product/thiessenpolygon',
        component: () => import('@/views/product/thiessenpolygon'),
        name: 'Thiessenpolygon',
        meta: { title: '泰森多边形' }
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
