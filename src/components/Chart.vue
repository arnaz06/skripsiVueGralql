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
                <h3 class="block-title">Statistik Pendaftaran Calon Mahasiswa Per Bulan</h3>
                </center>
              </div>
              <div class="block-content block-content-full">
                <!-- Stacked Chart Container -->
                <app-graph :chart-data="matriculantPerMonth" :options="option"></app-graph>
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
        datasets: [
          {
            label: 'Calon Mahasiswa',
            backgroundColor: '#f87979',
            data: [1,2,3,4,5,6,7,8,9,10,11,12]
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
    this.getMatriculantPerMonth()
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
    },
     getMatriculantPerMonth(){
       console.log('disini');
       
      this.$apollo.query({
        query:MATRICULANT_PER_MONTH,
        variables:{
          year: this.year
        }
      }).then(response=>{
        console.log(response.data.matriculantPerMonth)
        let datasets= Object.keys(response.data.matriculantPerMonth).map(key=> response.data.matriculantPerMonth[key])
        console.log('ds',datasets);
        this.matriculantPerMonth.datasets[0].data=[]
        this.matriculantPerMonth.datasets[0].data[0]=response.data.matriculantPerMonth.jan
        this.matriculantPerMonth.datasets[0].data[1]=response.data.matriculantPerMonth.feb
        this.matriculantPerMonth.datasets[0].data[2]=response.data.matriculantPerMonth.mar
        this.matriculantPerMonth.datasets[0].data[3]=response.data.matriculantPerMonth.apr
        this.matriculantPerMonth.datasets[0].data[4]=response.data.matriculantPerMonth.may
        this.matriculantPerMonth.datasets[0].data[5]=response.data.matriculantPerMonth.jun
        this.matriculantPerMonth.datasets[0].data[6]=response.data.matriculantPerMonth.jul
        this.matriculantPerMonth.datasets[0].data[7]=response.data.matriculantPerMonth.ags
        this.matriculantPerMonth.datasets[0].data[8]=response.data.matriculantPerMonth.sep
        this.matriculantPerMonth.datasets[0].data[9]=response.data.matriculantPerMonth.oct
        this.matriculantPerMonth.datasets[0].data[10]=response.data.matriculantPerMonth.nov
        this.matriculantPerMonth.datasets[0].data[11]=response.data.matriculantPerMonth.dec
      }).catch(err=>{
        console.log(err);
        alert(err.message)
      })
    }
  }
}
</script>
