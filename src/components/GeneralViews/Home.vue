<template>
    <section class="home-page">
        <SideBar />
        <Map />

        <Aside>
            <div class="search" slot="content">
              <input type="text" placeholder="Pesquisar" class="search__input">
              <svg class="icon-search" version="1.1" viewBox="0 0 451 451" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
	               <path d="m447.05 428l-109.6-109.6c29.4-33.8 47.2-77.9 47.2-126.1 0-106.1-86.3-192.3-192.3-192.3-106.1 0-192.3 86.3-192.3 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126.1-47.2l109.6 109.6c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.2-5.2 5.2-13.8 0-19zm-420.1-235.7c0-91.2 74.2-165.3 165.3-165.3 91.2 0 165.3 74.2 165.3 165.3s-74.1 165.4-165.3 165.4c-91.1 0-165.3-74.2-165.3-165.4z"/>
               </svg>
            </div>
        </Aside>
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
