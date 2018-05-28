import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PostDetails from '@/components/PostDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/category/culture'
    },
    {
      path: '/category/:slug',
      name: 'Home',
      component: Home
    },
    {
      path: '/category/:cat/:id/:slug',
      name: 'PostDetails',
      component: PostDetails
    }
  ]
})
