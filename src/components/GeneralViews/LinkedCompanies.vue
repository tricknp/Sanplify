<template>
  <section class="lc-page">

    <sidebar />

    <div class="lc-page__container">

       <input class="lc-page__container--input" type="text" placeholder="Pesquisar Colaborador">

        <div class="tabs-header">
            <span :class="{'active': tabCollectors}"   @click="collectors()"   > Coletores    </span>
            <span :class="{'active': tabCooperatives}" @click="cooperatives()" > Cooperativas </span>
            <span :class="{'active': tabCompanies}"     @click="companies()"    > Empresas     </span>
        </div>

        <div class="tab-container">
          <div v-if="tabCollectors" class="tab-container__content">

              <div class="--item">
                <img src="../../../static/user-photo.jpg" class="--item__img">
                <h4 class="--item__name">Angelo Luz</h4>
              </div>

          </div>

            <div v-if="tabCooperatives" class="tab-container__content">
              <div class="--item">
                <img src="../../../static/recicla.png" class="--item__img">
                <h4 class="--item__name">Recicla</h4>
              </div>
            </div>

            <div v-if="tabCompanies" class="tab-container__content">
              <h1>Nenhuma empresa filiada...</h1>
            </div>
          </div>

    </div>
  </section>

</template>

<script>
import Sidebar from '../Main/SideBar'

export default {

  components: { Sidebar },

  data(){
    return{
      tabCollectors: true,
      tabCooperatives: false,
      tabCompanies: false,
    }
  },

  methods: {
    collectors(){
      this.tabCollectors    = true
      this.tabCooperatives  = false
      this.tabCompanies     = false
    },

    cooperatives(){
      this.tabCollectors    = false
      this.tabCooperatives  = true
      this.tabCompanies     = false
    },

    companies(){
      this.tabCollectors    = false
      this.tabCooperatives  = false
      this.tabCompanies     = true
    },
  },

}
</script>
