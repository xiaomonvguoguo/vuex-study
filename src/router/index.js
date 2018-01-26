import Vue from 'vue'
import Router from 'vue-router'

import IndexOne  from '@/components/Index'
import IndexTwo  from '@/components/Index2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexOne',
      component: IndexOne
    },
    {
      path: '/two',
      name: 'indexTwo',
      component: IndexTwo
    }
  ]
})
