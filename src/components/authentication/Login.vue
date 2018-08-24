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
import axios from 'axios'
import url from '../_mixins/url'

export default {
  data(){
    return{
      email: '',
      password: '',
      role: '',
    }
  },

  mixins: [ url ],

  methods: {
    signIn(){
      axios.post(`${this.baseURL}login`, {
        email: this.email,
        password: this.password,
      }).then(res => {
        const token = res.data.token
        console.log(token)
        localStorage.setItem('token', token)
        localStorage.setItem('email', this.email)

        // console.log(res.data)
      })
    }
  }

}
</script>
