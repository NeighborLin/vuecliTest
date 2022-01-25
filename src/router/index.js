import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'

import count from '@/components/count'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hi',
      name: 'Hi',
      component: Hi
    },
    {
      path: '/count',
      name: 'count',
      component: count
    }
  ]
})
