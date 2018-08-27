<template>
  <section>
    <form class="login-container">
      <input type="text" placeholder="username"     v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="button" @click="signIn()"> Entrar </button>
      <h1> {{ `${email} ${password} ` }} </h1>

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
