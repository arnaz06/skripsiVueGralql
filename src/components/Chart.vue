<template>
  <div>
  <div class="row">
    <div class="col-md-6">
      <h3 >{{type.toUpperCase()}}</h3>
    </div>
    <div class="col-md-6">
      <form>
        <select name="type" v-model="type" class="form-control">
          <option value="reguler">REGULER</option>
          <option value="non reguler">NON REGULER</option>
        </select>
      </form>
    </div>
  </div>
  <div class="row">
          <div class="col-sm-6 col-md-3 col-xs-6">
            <a class="block block-link-hover3 text-center" href="javascript:void(0)">
              <div class="block-content block-content-full">
                <div class="h1 font-w700 text-success"  >{{sortMatriculant.ia}}</div>
              </div>
              <div class="block-content block-content-full block-content-mini bg-gray-lighter text-success font-w600">IA</div>
            </a>
          </div>
          <div class="col-sm-6 col-md-3 col-xs-6">
            <a class="block block-link-hover3 text-center" href="javascript:void(0)">
              <div class="block-content block-content-full">
                <div class="h1 font-w700 text-danger" >{{sortMatriculant.iia}}</div>
              </div>
              <div class="block-content block-content-full block-content-mini bg-gray-lighter text-danger font-w600">IIA</div>
            </a>
          </div>
          <div class="col-sm-6 col-md-3 col-xs-6">
            <a class="block block-link-hover3 text-center" href="javascript:void(0)">
              <div class="block-content block-content-full">
                <div class="h1 font-w700 text-info" >{{sortMatriculant.iiia}}</div>
              </div>
              <div class="block-content block-content-full block-content-mini bg-gray-lighter  text-info font-w600">IIIA</div>
            </a>
          </div>
          <div class="col-sm-6 col-md-3 col-xs-6">
            <a class="block block-link-hover3 text-center" href="javascript:void(0)">
              <div class="block-content block-content-full">
                <div class="h1 font-w700  text-warning" >{{sortMatriculant.iva}}</div>
              </div>
              <div class="block-content block-content-full block-content-mini bg-gray-lighter text-warning font-w600">IVA</div>
            </a>
          </div>
        </div>
  </div>
</template>
<script>
import {SORTMATRICULANT} from '../graphql'
import { log } from 'async';
export default {
  name: 'Chart',
  data(){
    return {
      type: 'reguler',
      sortMatriculant:{}
    }
  },
  watch:{
    type(){
      this.getSortMatriculant()
    }
  },
  mounted () {
    this.getSortMatriculant()
    this.$nextTick(() => {
                var ctx = document.getElementById("myChart").getContext('2d');
                var myChart = new Chart(ctx, {
                  // ngubah tipe chart e ning kene
                  // bar, line radar doughnut
                  type: 'bar',
                  data: {
                    // nambah data ning kene
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                      label: '{title}',
                      data: [12, 19, 3, 5, 2, 3],
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                      ],
                      borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 0
                    }]
                  },
                  options: {
                    scales: {
                      yAxes: [{
                        ticks: {
                          beginAtZero: true
                        }
                      }]
                    }
                  }
                });
    })
  },
  methods:{
    getSortMatriculant(){
      this.$apollo.query({
        query: SORTMATRICULANT,
        variables:{
          type: this.type
        }
      }).then(response=>{
        console.log(response);
        this.sortMatriculant=response.data.sortMatriculant
      }).catch(err=>{
        console.log(err);
        
      })
    }
  }
}
</script>

