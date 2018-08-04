import Vue from 'vue'
import Router from 'vue-router'

import Home     from  '@/components/GeneralViews/Home'
import Location from  '@/components/GeneralViews/Location'
import Graphics from  '@/components/GeneralViews/Graphics'
import Contact  from  '@/components/GeneralViews/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:
  [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path:'/localizacao',
      name: 'Location',
      component: Location
    },

    {
      path: '/graficos',
      name: 'Graphics',
      component: Graphics
    },

    {
      path: '/contato',
      name: 'Contact',
      component: Contact
    }


  ]
})
