import Vue from 'vue'
import Router from 'vue-router'
import Child from './views/Child.vue'
import Face from './views/Face.vue'
import Remote from './views/Remote.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'face',
      component: Face
    },
    {
      path: '/child',
      name: 'child',
      component: Child
    },
    {
      path: '/remote',
      name: 'remote',
      component: Remote
    }
  ]
})
