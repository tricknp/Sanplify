<template>
  <div class="phone-view">

        <div class="phone-view__discart">
          <svg class="icon-gabage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.355 72.457">
            <path class="a" d="M9.025,67.406a8.074,8.074,0,0,0,8.051,8.051h32.2a8.074,8.074,0,0,0,8.051-8.051V19.1H9.025ZM61.355,7.025H47.266L43.241,3H23.114L19.089,7.025H5v8.051H61.355Z" transform="translate(-5 -3)"/>
          </svg>
          &nbsp;&nbsp;
          <span>{{ txtBtn }}</span>
        </div>

        <div class="phone-view__action" @click="show">
          <svg class="house-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.145 99.573">
            <path d="M48.858,102.573V67.43H72.287v35.143h29.286V55.715h17.572L60.572,3,2,55.715H19.572v46.858Z" transform="translate(-2 -3)"/>
          </svg>
          &nbsp;&nbsp;
          <span>Adicionar endereço residencial</span>
        </div>

        <div class="phone-view__action">
          <svg class="person-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.573 99.573">
            <path class="a" d="M53.787,53.787A24.893,24.893,0,1,0,28.893,28.893,24.886,24.886,0,0,0,53.787,53.787Zm0,12.447C37.17,66.233,4,74.572,4,91.127v12.447h99.573V91.127C103.573,74.572,70.4,66.233,53.787,66.233Z" transform="translate(-4 -4)"/>
          </svg>
          &nbsp;&nbsp;
          <span>Adicionar empresas ou coletor</span>
        </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      txtBtn: 'Descartar Lixo'
    }
  },

  methods: {
    show(){
      this.$emit('show')
    }
  }
}
</script>
