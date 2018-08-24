import Vue from 'vue'
import Router from 'vue-router'

import Login    from '@/components/authentication/Login'
import Home     from  '@/components/GeneralViews/Home'
import News     from  '@/components/GeneralViews/News'
import Contact  from  '@/components/GeneralViews/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:
  [
    {
      path: '/',
      redirect: '/login'
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/home',
      name: 'Home',
      component: Home
    },

    {
      path: '/noticias',
      name: 'News',
      component: News
    },

    {
      path: '/contato',
      name: 'Contact',
      component: Contact
    },

  ]
})
