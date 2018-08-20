export default {
  data(){
    return{
      toggleAside: true
    }
  },

  methods: {
    showAside(){
      this.toggleAside = true
    },

    closeAside(){
      this.toggleAside = false
    },

    actionAside(){
      alert('kk')
    },

    actionAside(){
      if (this.toggleAside) {
        this.toggleAside = false
      }else {
        this.toggleAside = true
      }

      this.$bus.$emit('actionAside', this.toggleAside)
    }
  }

}
