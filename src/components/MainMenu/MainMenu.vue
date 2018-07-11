<template>
    <div class="main-menu-container">
        <div class="menu-title">
            <h1>O que gostaria de acessar?</h1>
        </div>    

        <div class="menu-items">
            <router-link :to="{ name: 'Location' }" class="menu-item-content">
                <img class="menu-item-icon" src="../../../static/icons/map.svg">
            </router-link>

            <div class="menu-item-content">
                <img class="menu-item-icon" src="../../../static/icons/claims.svg">
            </div>

            <div class="menu-item-content">
                <img class="menu-item-icon" src="../../../static/icons/graphic.svg">
            </div>

            <div class="menu-item-content">
                <img class="menu-item-icon" src="../../../static/icons/house.svg">
            </div>
        </div>

    </div>    
</template>

<script>
export default {

}
</script>

<style>

</style>
