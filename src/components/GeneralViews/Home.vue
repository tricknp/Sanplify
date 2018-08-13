<template>
    <section class="home-page">
        <SideBar />
        <Map />
        <Aside />
    </section>
</template>

<script>
import SideBar from '../Main/SideBar'
import Aside from '../Main/Aside'
import Map from '../Location/Map'

export default {
    components: { SideBar, Map, Aside }

}
</script>
