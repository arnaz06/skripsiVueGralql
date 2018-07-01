<script>
import { Bar, mixins } from 'vue-chartjs'
import { log } from 'async';

export default {
  mixins: [mixins.reactiveProp,  mixins.reactiveData],
  props: ['chartData', 'options'],
  extends: Bar,
  data(){
    return {
      year:2018,
      matriculantPerMonth:{}
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartData, this.options)
  },
  methods:{

  }
}
</script>

<style>

</style>
