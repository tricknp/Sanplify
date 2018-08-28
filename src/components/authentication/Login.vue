<template>
  <section class="login">
    <img src="../../../static/sanplifyLogo.svg" class="login__logo">
    <h1 class="login__text">Seja bem vindo</h1>

    <form class="login__form">
      <input type="text" placeholder="Nome de usuario" v-model="email" class="login__form--input">
      <input type="password" placeholder="Senha" v-model="password" class="login__form--input">

      <button type="button" @click="signIn()" class="login__form--btn"> Entrar </button>
      <span class="forgotPass">
        Esqueceu sua senha?
        <a class="forgotPass__action"> Clique aqui </a>
      </span>
    </form>

  </section>
</template>

<script>
import login from './loginn.js'
import url from "../_mixins/url";

export default {
  data() {
    return {
      email: "",
      password: "",
      role: ""
    };
  },

  mixins: [url],

  methods: {
    signIn() {
      let userData = {email: this.email, password: this.password};
      login(userData, this);
    }
  }
};
</script>
