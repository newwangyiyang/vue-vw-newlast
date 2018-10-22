import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//固定展示的路由， 如果非开启权限分配功能，将全部路由添加到此处 ↓
export const constantRouterMap = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/Index/index')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/Home/index'),
    //配置子路由
    children: [
      {
        path: 'HomeSon',
        name: 'HomeSon',
        component: () => import('@/views/Home/HomeSon/index')
      }
    ]
  }
];

//根据权限分配的路由
export const asyncRouterMap = [
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import('@/views/Admin/index'),
    meta: {
      roles: ['admin'] //后台返给的权限
    }
  },
  {
    path: '/Editor',
    name: 'Editor',
    component: () => import('@/views/Editor/index'),
    meta: {
      roles: ['editor'] //后台返给的权限
    }
  },
];




export default new Router({
  routes: constantRouterMap
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route,which is lazy-loaded when the route is visited.
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  // }
})