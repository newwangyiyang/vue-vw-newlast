import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
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
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route,which is lazy-loaded when the route is visited.
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})