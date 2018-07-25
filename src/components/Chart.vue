<template>
  <div>
  <div class="row">
    <div class="col-md-6">
      <h3 >{{type.toUpperCase()}}</h3>
    </div>
    <div class="col-md-6">
        <select name="type" v-model="type" class="form-control">
          <option value="reguler">REGULER</option>
          <option value="pmdk">PMDK</option>
        </select>
    </div>
  </div>
  <br>
  <div class="row">
          <div class="col-md-1"></div>
          <div class="col-sm-6 col-md-2 col-xs-6">
            <a class="block block-link-hover3 text-center" href="javascript:void(0)">
              <div class="block-content block-content-full">
                <div class="h1 font-w700 text-success"  >{{sortMatriculant.ia}}</div>
              </div>
              <div class="block-content block-content-full block-content-mini bg-gray-lighter text-success font-w600">IA</div>
            </a>
          </div>
          <div class="col-sm-6 col-md-2 col-xs-6">
            <a class="block block-link-hover3 text-center" href="javascript:void(0)">
              <div class="block-content block-content-full">
                <div class="h1 font-w700 text-danger" >{{sortMatriculant.ib}}</div>
              </div>
              <div class="block-content block-content-full block-content-mini bg-gray-lighter text-danger font-w600">IB</div>
            </a>
          </div>
          <div class="col-sm-6 col-md-2 col-xs-6">
            <a class="block block-link-hover3 text-center" href="javascript:void(0)">
              <div class="block-content block-content-full">
                <div class="h1 font-w700 text-info" >{{sortMatriculant.ic}}</div>
              </div>
              <div class="block-content block-content-full block-content-mini bg-gray-lighter  text-info font-w600">IC</div>
            </a>
          </div>
          <div class="col-sm-6 col-md-2 col-xs-6">
            <a class="block block-link-hover3 text-center" href="javascript:void(0)">
              <div class="block-content block-content-full">
                <div class="h1 font-w700  text-warning" >{{sortMatriculant.iia}}</div>
              </div>
              <div class="block-content block-content-full block-content-mini bg-gray-lighter text-warning font-w600">IIA</div>
            </a>
          </div>
          <div class="col-sm-6 col-md-2 col-xs-6">
            <a class="block block-link-hover3 text-center" href="javascript:void(0)">
              <div class="block-content block-content-full">
                <div class="h1 font-w700  text-success" >{{sortMatriculant.iib}}</div>
              </div>
              <div class="block-content block-content-full block-content-mini bg-gray-lighter text-success font-w600">IIB</div>
            </a>
          </div>
          <div class="col-md-1"></div>
        </div>
         <div class="row">
          <div class="col-sm-12">
            <!-- Stacked Chart -->
            <div class="block">
              <div class="block-header">
                <center>
                <!-- <h3 class="block-title">Statistik Pendaftaran Calon Mahasiswa Per Bulan</h3> -->
                </center>
              </div>
              <div class="block-content block-content-full">
                <!-- Stacked Chart Container -->
                <!-- <app-graph :chart-data="matriculantPerMonth" :options="option"></app-graph> -->
                <!-- <line-chart :data="{'2017-05-13': 2, '2017-05-14': 5}"></line-chart> -->
                <canvas id="myChart" width="400" height="400"></canvas>
              </div>
            </div>
            <!-- END Stacked Chart -->
          </div>
        </div>
  </div>

</template>
<script>
import {SORTMATRICULANT,MATRICULANT_PER_MONTH} from '../graphql'
import Graph from './Graph.vue'
import { log } from 'async';
export default {
  name: 'Chart',
  components:{
    'app-graph': Graph
  },
  data(){
    return {
      type: 'reguler',
      year: 2018,
      sortMatriculant:{},
      matriculantPerMonth:{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        data:[0,0,0,0,0,0,0,0,0,0,0,0],
        datasets: [
          {
            label: 'Statistik Pendaftaran Calon Mahasiswa Per Bulan',
            backgroundColor: '#f87979',
            data: [0,0,0,0,0,0,0,0,0,0,0,0]
          }
        ]
      },
      option: {responsive: true, maintainAspectRatio: false}
    }
  },
  watch:{
    type(){
      this.getSortMatriculant()
    }
  },
  mounted () {
    this.getSortMatriculant()
    this.getMatriculantPerMonth().then(()=>{

      this.renderChar()
    }) 
  },
  methods:{
    renderChar(){
      var ctx = document.getElementById("myChart").getContext('2d');
      var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: this.matriculantPerMonth.labels,
          datasets: [{
              label: 'Statistik Pendaftaran Calon Mahasiswa Per Bulan',
              data: this.matriculantPerMonth.data,
              backgroundColor:'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1
          }]
      },
      options: {
          response:true,
          maintainAspectRatio:false,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
    },
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
    },
    getMatriculantPerMonth (){
        return this.$apollo.query({
        query:MATRICULANT_PER_MONTH,
        variables:{
          year: this.year
        }
      }).then(response=>{
        this.matriculantPerMonth.data[0]=response.data.matriculantPerMonth.jan
        this.matriculantPerMonth.data[1]=response.data.matriculantPerMonth.feb
        this.matriculantPerMonth.data[2]=response.data.matriculantPerMonth.mar
        this.matriculantPerMonth.data[3]=response.data.matriculantPerMonth.apr
        this.matriculantPerMonth.data[4]=response.data.matriculantPerMonth.may
        this.matriculantPerMonth.data[5]=response.data.matriculantPerMonth.jun
        this.matriculantPerMonth.data[6]=response.data.matriculantPerMonth.jul
        this.matriculantPerMonth.data[7]=response.data.matriculantPerMonth.ags
        this.matriculantPerMonth.data[8]=response.data.matriculantPerMonth.sep
        this.matriculantPerMonth.data[9]=response.data.matriculantPerMonth.oct
        this.matriculantPerMonth.data[10]=response.data.matriculantPerMonth.nov
        this.matriculantPerMonth.data[11]=response.data.matriculantPerMonth.dec
      }).catch(err=>{
        console.log(err);
        alert(err.message)
      })
    }
  }
}
</script>
