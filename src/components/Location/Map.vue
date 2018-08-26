<template>
  <div class="map-container">

    <Aside v-if="toggleAside">
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

        <PhoneView slot="content" @show="isShow = true" />

    </Aside>

    <modal v-if="isShow">
      <h1 slot="header">blablalbla</h1>
      <label slot="content" class="aaa">
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
