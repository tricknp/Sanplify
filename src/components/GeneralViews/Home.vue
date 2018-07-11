<template>
    <section class="home-page">
        <Header />
        <MainMenu />
    </section>    
</template>

<script>
import Header from '../FixedComponents/Header'
import MainMenu from '../MainMenu/MainMenu'

export default {

    components: { Header, MainMenu }    

}
</script>