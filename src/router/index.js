import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import test from '@/components/test'
import partners from '@/components/PartnersPage'
import Team from '@/components/Team'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'test',
      component: test
    },

    {
      path: '/home',
      name: 'home',
      component: HomePage
    },

    {
      path: '/partners',
      name: 'partners',
      component: partners
    },

    {
      path: '/team',
      name: 'team',
      component: Team
    }

  ]
})
