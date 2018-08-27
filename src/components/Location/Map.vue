<template>
  <div class="map-container">

    <Aside v-if="toggleAside && isProductor">
        <label slot="content" class="search">
          <gmap-autocomplete
            placeholder="Adicionar endereço residencial"
            class="search__input"
            @place_changed="setPlace"
          ></gmap-autocomplete>

          <button v-if="currentPlace != null" @click="addMarker" class="icon-search">
            <svg class="icon-search" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26 26">
             <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"/>
            </svg>
          </button>

          <button v-else class="icon-search">
             <svg class="icon-search" version="1.1" viewBox="0 0 451 451" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
              <path d="m447.05 428l-109.6-109.6c29.4-33.8 47.2-77.9 47.2-126.1 0-106.1-86.3-192.3-192.3-192.3-106.1 0-192.3 86.3-192.3 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126.1-47.2l109.6 109.6c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.2-5.2 5.2-13.8 0-19zm-420.1-235.7c0-91.2 74.2-165.3 165.3-165.3 91.2 0 165.3 74.2 165.3 165.3s-74.1 165.4-165.3 165.4c-91.1 0-165.3-74.2-165.3-165.4z"/>
             </svg>
          </button>
        </label>

        <PhoneView  slot="content" @show="isShow = true"  />
    </Aside>

    <div v-if="isCollector" class="isCollector">
      <button class="isCollector__item" @click="showOptions()">
        <svg class="icon-isCollector" version="1.1" viewBox="0 0 401.994 401.994" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
        	<path d="m394 154.18c-5.331-5.33-11.806-7.994-19.417-7.994h-118.77v-118.78c0-7.611-2.666-14.084-7.994-19.414-5.329-5.326-11.797-7.992-19.419-7.992h-54.812c-7.612 0-14.084 2.663-19.414 7.993s-7.994 11.803-7.994 19.414v118.78h-118.77c-7.611 0-14.084 2.664-19.414 7.994s-7.993 11.797-7.993 19.413v54.819c0 7.618 2.662 14.086 7.992 19.411 5.33 5.332 11.803 7.994 19.414 7.994h118.77v118.78c0 7.611 2.664 14.089 7.994 19.417 5.33 5.325 11.802 7.987 19.414 7.987h54.816c7.617 0 14.086-2.662 19.417-7.987 5.332-5.331 7.994-11.806 7.994-19.417v-118.78h118.77c7.618 0 14.089-2.662 19.417-7.994 5.329-5.325 7.994-11.793 7.994-19.411v-54.819c-2e-3 -7.616-2.661-14.087-7.993-19.414z"/>
        </svg>

      </button>
      <button class="isCollector__item">
        <svg class="icon-isCollector" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
        		<path d="m467.81 431.85l-36.629-61.056c-16.917-28.181-25.856-60.459-25.856-93.312v-53.483c0-67.52-45.056-124.63-106.67-143.04v-38.293c0-23.531-19.136-42.667-42.667-42.667s-42.667 19.136-42.667 42.667v38.293c-61.61 18.411-106.67 75.52-106.67 143.04v53.483c0 32.853-8.939 65.109-25.835 93.291l-36.629 61.056c-1.984 3.307-2.027 7.403-0.128 10.752s5.419 5.419 9.259 5.419h405.33c3.84 0 7.381-2.069 9.28-5.397 1.899-3.329 1.835-7.468-0.128-10.753z"/>
        		<path d="m188.82 469.33c12.032 25.131 37.504 42.667 67.178 42.667s55.147-17.536 67.179-42.667h-134.36z"/>
        </svg>
      </button>
    </div>

    <div class="isCollector__menu" v-if="toggleOptions">
      <span class="isCollector__menu--close" @click="toggleOptions = false">fechar</span>
      <button class="isCollector__menu--item">Criar nova rota de coleta</button>
      <button class="isCollector__menu--item">Criar ponto fixo de coleta</button>
      <button class="isCollector__menu--item">Criar área de atividade</button>
    </div>


    <modal v-if="isShow">
      <h1 slot="header">Adicionar Endereço</h1>
      <label slot="content">
        <gmap-autocomplete
          placeholder="Local da coleta... "
          class="search__input"
          @place_changed="setPlace"
        ></gmap-autocomplete>

        <button v-if="currentPlace != null" @click="addMarker" class="icon-search">
          <svg class="icon-search" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26 26">
           <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"/>
          </svg>
        </button>

        <button v-else class="icon-search">
           <svg class="icon-search" version="1.1" viewBox="0 0 451 451" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <path d="m447.05 428l-109.6-109.6c29.4-33.8 47.2-77.9 47.2-126.1 0-106.1-86.3-192.3-192.3-192.3-106.1 0-192.3 86.3-192.3 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126.1-47.2l109.6 109.6c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.2-5.2 5.2-13.8 0-19zm-420.1-235.7c0-91.2 74.2-165.3 165.3-165.3 91.2 0 165.3 74.2 165.3 165.3s-74.1 165.4-165.3 165.4c-91.1 0-165.3-74.2-165.3-165.4z"/>
           </svg>
        </button>
      </label>

      <button slot="footer" @click="isShow = false">fechar</button>
    </modal>

    <gmap-map
      :center="center"
      :zoom="15"
      style="width:100%; height:100%;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>

  </div>
</template>

<script>
import Aside from '../Main/Aside'
import Modal from '../UIComponents/Modal'
import toggleAside from '../_mixins/toggleAside'
import PhoneView from './PhoneView'
export default {
  name: "GoogleMap",

  components: { Aside, Modal, PhoneView },

  mixins: [ toggleAside ],

  data() {
    return {
      isShow: false,
      toggleOptions: false,
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    }
  },

  mounted() {
    this.geolocate()
  },

  created(){
    this.$bus.$on('actionAside', state => {
      this.toggleAside = state
    })
    console.log(localStorage.role);
  },

  computed: {
    isProductor: function(){
      if (localStorage.role == 'productor') {
        return true
      }else{
        return false
      }
    },

    isCollector: function(){
      if (localStorage.role == 'collector') {
        return true
      }else{
        false
      }
    }

  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
      }
      alert('Endereço residencial atualizado com sucesso.')
    },

    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    },

    showOptions(){
      this.toggleOptions = true
    }

  }
}
</script>

<style lang="scss" scoped>

@media (max-width: 430px){

  .aside
  {
    background: #fff;
    width: 100%;
    position: fixed;
    bottom: 8%;
    left: 0;
    height: 15em;
    box-shadow: 4px 3px 4px 4px #ddd;
    z-index: 1;
  }

  .phone-view{ display: flex }

}

</style>
