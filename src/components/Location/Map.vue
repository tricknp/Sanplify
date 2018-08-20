<template>
  <div class="map-container">

    <Aside v-if="toggleAside">
        <label slot="content" class="search">
          <gmap-autocomplete placeholder="Pesquisar" class="search__input" @place_changed="setPlace"> </gmap-autocomplete>

          <button @click="addMarker" class="icon-search">
             <svg class="icon-search" version="1.1" viewBox="0 0 451 451" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
              <path d="m447.05 428l-109.6-109.6c29.4-33.8 47.2-77.9 47.2-126.1 0-106.1-86.3-192.3-192.3-192.3-106.1 0-192.3 86.3-192.3 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126.1-47.2l109.6 109.6c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.2-5.2 5.2-13.8 0-19zm-420.1-235.7c0-91.2 74.2-165.3 165.3-165.3 91.2 0 165.3 74.2 165.3 165.3s-74.1 165.4-165.3 165.4c-91.1 0-165.3-74.2-165.3-165.4z"/>
             </svg>
          </button>
        </label>
    </Aside>

    <gmap-map
      :center="center"
      :zoom="15"
      style="width:100%;  height: 100%;"
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
import toggleAside from '../_mixins/toggleAside'

export default {
  name: "GoogleMap",

  components: { Aside },

  mixins: [ toggleAside ],

  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  created(){
    this.$bus.$on('actionAside', state => {
      this.toggleAside = state
    })
  },

  methods: {

    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>
