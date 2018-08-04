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
            data: [0, 10, 50, 30, 1, 40, 11, 21, 32, 42, 32, 12]
          },
          {
            label: 'Papel',
            backgroundColor: 'blue',
            data: [60, 10, 1, 5, 22, 2, 44, 4, 55, 66, 77, 12]
          },
          {
            label: 'Plastico',
            backgroundColor: 'red',
            data: [22, 44, 44, 66, 22, 44, 66, 2, 44,43, 12, 11]
          },
          {
            label: 'Metal',
            backgroundColor: 'yellow',
            data: [30, 24, 100, 70, 22, 4,12, 22, 33,22,11, 33]
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
