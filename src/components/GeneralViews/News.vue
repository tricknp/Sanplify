<template>
  <div class="news-page">
    <SideBar />
    <Aside v-if="toggleAside" />
  <section class="news">
    <div class="news__container">

      <h1 class="news__container__title"> Noticías </h1>

      <div class="news__container__banner">
        <h1 class="--title">Notcía principal</h1>
      </div>

      <div class="news__container__content">
        <div class="__subContainer">

          <div class="__subContainer__img"></div>

          <div class="__subContainer__news">
            <h1 class="__subContainer__news--title">Título da notícia</h1>
            <p class="__subContainer__news--text"> Descrição da notícia </p>
          </div>

        </div>

        <div class="__subContainer">

          <div class="__subContainer__img"></div>

          <div class="__subContainer__news">
            <h1 class="__subContainer__news--title">Título da notícia</h1>
            <p class="__subContainer__news--text"> Descrição da notícia </p>
          </div>

        </div>

        <div class="__subContainer">

          <div class="__subContainer__img"></div>

          <div class="__subContainer__news">
            <h1 class="__subContainer__news--title">Título da notícia</h1>
            <p class="__subContainer__news--text"> Descrição da notícia </p>
          </div>

        </div>

      </div>

    </div>

  </section>
</div>
</template>


<script>
import SideBar from '../Main/SideBar'
import Aside from '../Main/Aside'
import toggleAside from '../_mixins/toggleAside'


export default {
   components: { SideBar, Aside },

   mixins: [ toggleAside ],

    created(){
      this.$bus.$on('actionAside', state => {
        this.toggleAside = state
      })
    },
}
</script>
