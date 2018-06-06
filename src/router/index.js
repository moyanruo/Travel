import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

// 路由就是根据网址不同，返回不同的内容给用户

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }]
})
