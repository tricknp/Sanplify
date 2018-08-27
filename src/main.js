import Vue from 'vue'
import App from './App'
import router from './router'
import login from './components/authentication/loginn'

import * as VueGoogleMaps from "vue2-google-maps";
import VTooltip from 'v-tooltip'

import './assets/sass/app.scss'
import MapInfo from './MapInfo' // import of google maps api key, is not necessary if you have a api key

Vue.use(VTooltip)

Vue.use(VueGoogleMaps, {
  load: {
    key: MapInfo.getKey(), //your google map api key here
    libraries: "places" // necessary for places input
  }
});

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
const vueInstance = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


login(null, vueInstance);
