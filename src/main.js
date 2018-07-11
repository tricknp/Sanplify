import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/sass/app.scss'

const EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
