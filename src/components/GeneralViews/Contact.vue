<template>
  <section class="contact-page">

    <SideBar />

    <div class="contact">
      <div class="contact__container">

        <h1 class="contact__container__title">Fale conosco</h1>

        <div class="contact__container__options">
          <div class="--item">
            <div class="--item__icon_container"></div>
            <h3 class="--item__text">Enviar um e-mail</h3>
          </div>

          <div class="--item">
            <div class="--item__icon_container"></div>
            <h3 class="--item__text">Reclamações</h3>
          </div>

          <div class="--item">
            <div class="--item__icon_container"></div>
            <h3 class="--item__text">Encontre-nos</h3>
          </div>
        </div>

        <form class="contact__container__form">

          <div class="form-container">
            <div class="form-container--left">
              <input class="form-container--left__input" type="text">
              <input class="form-container--left__input" type="text">
              <input class="form-container--left__input" type="text">
              <input class="form-container--left__input" type="text">
            </div>
            <textarea name="name" class="form-container--right"></textarea>
          </div>

          <button class="contact__container--btn">Enviar</button>

        </form>

      </div>
    </div>

  </section>
</template>

<script>
import SideBar from '../Main/SideBar'

export default {
    components: { SideBar }
}
</script>
