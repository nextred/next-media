import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PostDetails from '@/components/PostDetails'
import Search from '@/components/Search'
import SearchDetails from '@/components/SearchDetails'

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
    },
    {
      path: '/posts/search/:word',
      name: 'Search',
      component: Search
    },
    {
      path: '/posts/search/:word/:id/:slug',
      name: 'SearchDetails',
      component: SearchDetails
    }
  ]
})
