<template>
  <div class="phone-view">

        <div class="phone-view__btn">
          <svg class="house-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.145 99.573">
            <path d="M48.858,102.573V67.43H72.287v35.143h29.286V55.715h17.572L60.572,3,2,55.715H19.572v46.858Z" transform="translate(-2 -3)"/>
          </svg>
          <span>{{ txtBtn }}</span>
        </div>

        <div class="phone-view__btn" @click="show">
          <svg class="house-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.145 99.573">
            <path d="M48.858,102.573V67.43H72.287v35.143h29.286V55.715h17.572L60.572,3,2,55.715H19.572v46.858Z" transform="translate(-2 -3)"/>
          </svg>
          <span>Adicionar endereço residencial</span>
        </div>

        <div class="phone-view__btn">
          <svg class="house-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.145 99.573">
            <path d="M48.858,102.573V67.43H72.287v35.143h29.286V55.715h17.572L60.572,3,2,55.715H19.572v46.858Z" transform="translate(-2 -3)"/>
          </svg>
          <span>Adicionar empresa ou coletor</span>
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
