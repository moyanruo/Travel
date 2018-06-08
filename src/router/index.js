import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
// 将import内容写入routes中，可以实现组件按需异步加载，项目较小的情况下不推荐使用异步加载，当build的之后的app.js >1MB 时，可以使用

// 路由就是根据网址不同，返回不同的内容给用户

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
    // component: () => import('@/pages/home/Home')
  }, {
    path: '/city',
    name: 'City',
    component: City
    // component: () => import('@/pages/city/City')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
    // component: () => import('@/pages/detail/Detail')
  }],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
