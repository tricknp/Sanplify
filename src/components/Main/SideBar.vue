<template>

  <aside class="sidebar">
    <div class="sidebar__container">

      <router-link :to="{ name: 'Home'}" >
        <div class="sidebar__container__item --rose" @click="actionAside()"></div>
      </router-link>

      <router-link :to="{ name: 'News'}">
        <div class="sidebar__container__item --green">  </div>
      </router-link>

      <router-link :to="{ name: 'Contact'}">
        <div class="sidebar__container__item --blue">   </div>
      </router-link>
      <div class="sidebar__container__item --orange"> </div>
      <div class="sidebar__container__item --purple"> </div>
      <div class="sidebar__container__item --grey">   </div>
    </div>
  </aside>
</template>

<script>
import Aside from '../Main/Aside'
import toggleAside from '../_mixins/toggleAside'

export default {

  components: { Aside },

  mixins: [ toggleAside ],


}
</script>
