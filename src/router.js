import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Child from './views/Child.vue'
import Parent from './views/Parent.vue'
import Remote from './views/Remote.vue'
import Face from './views/Face.vue'

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
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/child',
      name: 'child',
      component: Child
    },
    {
      path: '/parent',
      name: 'parent',
      component: Parent
    },
    {
      path: '/remote',
      name: 'remote',
      component: Remote
    }
  ]
})
