<template>
  <div class="news-page">
    <SideBar />
    <Aside v-if="toggleAside" />

    <button class="add-new" v-if="isCollector"> Criar Notícia </button>

  <section class="news">
    <div class="news__container">

      <h1 class="news__container__title"> Noticías </h1>

      <div class="news__container__banner">
        <h1 class="--title">O lixo como uma oportunidade de Sucesso</h1>
      </div>

      <div class="news__container__content">
        <div class="__subContainer" v-for="(item, index) in news" :key="index">

          <img :src="item.img" class="__subContainer__img">

          <div class="__subContainer__news">
            <h1 class="__subContainer__news--title">{{item.title}}</h1>
            <p class="__subContainer__news--text" ref="desc"> {{item.desc | truncate(l) }}
              <span v-if="item.desc.length > l" class="show-more" @click="showMore(index)" ref="showMore"> mostrar mais</span>
            </p>
          </div>

        </div>

      </div>

    </div>

  </section>
</div>
</template>


<script>
import SideBar from '../Main/SideBar'
import Aside from '../Main/Aside'
import toggleAside from '../_mixins/toggleAside'


export default {
   components: { SideBar, Aside },

   mixins: [ toggleAside ],
   data(){
     return{
       l: 90,
       news:
       [
         {
           img: '../../../static/news_1.jpg',
           title: 'O lixo como uma oportunidade de Sucesso',
           desc: 'Empreendedores encontram no lixo chance de negócio que não viam em matéria prima virgem. A partir de ideias inovadoras e simples, eles mudam suas vidas apostando na transformação de resíduos em lucro certo\nA cada ano, cerca de 60 milhões de toneladas de lixo são produzidas em solo brasileiro. Parte desses resíduos é coletada e reaproveitada por cooperativas e grandes companhias de reciclagem e infraestrutura. Outra parte, jogada no meio ambiente, transforma-se em suplício para comunidades carentes que vivem próximas de lixões e aterros. Mas há ainda uma terceira parte que se transforma em oportunidade para pequenos e médios empresários que enxergam no lixo o início de um grande negócio. O site de VEJA conversou com empreendedores que, a partir de ideias inovadoras e simples, mudaram suas vidas apostando na transformação de resíduos em lucro certo e sustentável.\nNão se trata apenas de benevolência ou vontade de salvar o planeta. O que os empreendedores brasileiros começam a enxergar é que a possibilidade de se iniciar um negócio a partir de resíduos é, em muitos casos, mais lucrativa do que utilizar matéria prima virgem. Eles também preveem que o lixo se tornará um ativo cada vez mais valioso. De acordo com um estudo do Sebrae, 46% dos pequenos empresários pesquisados identificam oportunidades de ganhos com resíduos – e 48,3% utilizam materiais reciclados em seu processo produtivo. “É muito mais comum eles entrarem em negócios com resíduos por razões econômicas do que pelo puro ato da sustentabilidade. O objetivo é o lucro”, diz Carlos Silva Filho, presidente da Associação Brasileira das Empresas de Limpeza Pública e Resíduos Especiais (Abrelpe).'
         },

         {
            img: '../../../static/news_2.jpg',
            title: 'Qual o problema do lixo?',
            desc: "Todos temos ouvido falar muito que o lixo é um problema. Mas ao cidadão comum parece o problema do lixo só existe quando há interrupção na coleta do lixo e os lixeiros deixam de passar na sua porta. É de arrepiar, não é verdade? Sacos e sacos amontoando-se nas calçadas, exalando mau cheiro, atraindo insetos e outros animais. Em resumo: poluindo e sujando a porta da sua casa. \nO que é preciso entender é que, mesmo quando o lixo é recolhido pelos lixeiros, ele não desaparece,\napenas é levado para outro lugar. E é preciso muito cuidado para que ele não cause os problemas que estava causando na porta de sua casa em outro lugar. Afinal, a cidade também é nossa casa, assim como o país, o continente e o Planeta. \nO lixo é responsável por um dos mais graves problemas ambientais de nosso tempo. Seu volume é excessivo e vem aumentando progressivamente, principalmente nos grandes centros urbanos, atingindo quantidades impressionantes, como os 14 milhões de quilos coletados diariamente na Cidade de São Paulo. Além disso, os locais para disposição de todo esse material estão se esgotando rapidamente, exigindo iniciativas urgentes para a redução da quantidade enviada para os aterros sanitários, aterros clandestinos ou lixões. O lixo, como os demais problemas ambientais, tornou-se uma questão que excede à capacidade dos órgãos governamentais e necessita da participação da sociedade para sua solução.\n Uma das possibilidades para reduzir o problema do lixo é a implantação da coleta seletiva de lixo – que consiste na segregação de tudo o que pode ser reaproveitado, como papéis, latas, vidro, plástico, entre outros – enviando-se esse material para reciclagem. A implantação de programas de coleta seletiva de lixo não só contribui para a redução da poluição causada pelo lixo, como também proporciona economia de recursos naturais – como matérias-primas, água e energia – e, em alguns casos, pode representar a obtenção de recursos, advindos da comercialização do material.\nApesar do crescente número de municípios em que a coleta seletiva de lixo é implantada – uma vez que toda a coleta de lixo é atribuição dos governos municipais – verifica-se também um grande número de programas desenvolvidos por iniciativa da sociedade civil, em escolas, empresas, condomínios, etc., que apresentam maior chance de continuidade, pois não estão vinculados a mudanças e interesses políticos."
         }
       ]
     }
   },


   filters: {
     truncate(str, length){
       let output = str
       if (output.length > length) {
         output = str.substring(0, length) + '...'
       }
       return output
     }
   },

   computed:{
     isCollector: function(){
       if (localStorage.role == 'collector') {
         return true
       }else{
         return false
       }
     }
   },

    created(){
      this.$bus.$on('actionAside', state => {
        this.toggleAside = state
      })
    },

    methods:{
      showMore(i){
        console.log(this.$refs.showMore[i].getAttribute.length);
      }
    }
}
</script>

<style lang="scss" scoped>
  .aside{ display: none}

</style>
