<template>
    <section class="home-page">
        <SideBar />
        <Map />
    </section>
</template>

<script>
import SideBar from '../Main/SideBar'
import Map from '../Location/Map'

export default {
    components: { SideBar, Map }
}
</script>

<style lang="scss" scoped >
.sidebar
{
  position: relative;
}
@media (max-width: 430px){
  .sidebar{
    position: fixed;
    height: 3.3em;
    width: 100%;
    bottom: 0%;
    &__container{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
