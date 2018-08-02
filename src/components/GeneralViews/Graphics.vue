<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
          datasets: [
          {
            label: 'Vidro',
            backgroundColor: 'green',
            data: [0, 10, 50, 30, 1, 40, 11, 34, 44 ,44,55, 11]
          },
          {
            label: 'Papel',
            backgroundColor: 'blue',
            data: [60, 10, 1, 5, 22, 22, 44, 56,11, 43, 34, 43]
          },
          {
            label: 'Plastico',
            backgroundColor: 'red',
            data: [22, 44, 44, 66, 22, 44, 11, 11, 22, 33, 44, 44 ,55]
          },
          {
            label: 'Metal',
            backgroundColor: 'yellow',
            data: [30, 24, 100, 70, 22, 49, 100, 100, 100, 90, 19, 20]
          },
          ]
        }
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
