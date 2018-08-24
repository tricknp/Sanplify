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
</style>
