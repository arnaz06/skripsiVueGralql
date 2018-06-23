<template>
  <div class="block">
          <div class="block-header">
            <h3 class="block-title">Tabel Calon Mahasiswa
            </h3>
          </div>
          <div class="block-content">
            <form >
              <input type="text" class="form-control-static" placeholder="Tanggal" v-model="date" @keypress.enter="searchMatriculats">
              <input type="text" class="form-control-static" placeholder="Nama Sekolah" v-model="schoolName" @keypress.enter="searchMatriculats">
              <input type="text" class="form-control-static" placeholder="Golongan Pendaftaran" v-model="regisGroup" @keypress.enter="searchMatriculats">
              <input type="text" class="form-control-static" placeholder="status" v-model="status" @keypress.enter="searchMatriculats">
            </form>
            <!-- DataTables init on table by adding .js-dataTable-full class, functionality initialized in js/pages/base_tables_datatables.js -->
            <table class="table table-bordered table-striped ">
              <thead>
                <tr>
                  <th class="text-center" style="width: 3%">ID</th>
                  <th>NISN</th>
                  <!-- hidden : ndee hidden pas posisi -scale -->
                  <th class="hidden-xs">Name</th>
                  <th class="text-center" style="width: 10%;">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="matriculant in matriculantAll" :key="matriculant.id">
                  <td class="text-center">{{matriculant.id}}</td>
                  <td class="font-w600">{{matriculant.NISN}}</td>
                  <td class="font-w600">{{matriculant.fullName}}</td>
                  <!-- <td class="hidden-xs">{{matriculant}}</td>
                  <td class="hidden-xs">
                    <span class="label label-info">A.info</span>
                  </td> -->
                  <td class="text-center">
                    <router-link :to="`/dashoard/matriculant/`+matriculant.id">View</router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
</template>
<script>
import {MATRICULANT_ALL, STATMATRICULANT} from '../graphql'
import { log } from 'async';
export default {
  name: 'Table',
  data(){
    return{
      matriculantAll: []
    }
  },
  apollo:{
    matriculantAll:{
      query:MATRICULANT_ALL
    }
  },
  methods:{
    searchMatriculats(){
    this.$apollo.query({
      query:STATMATRICULANT,
      variables: {
        status: this.status,
        date: this.date,
        regisGroup: this.regisGroup,
        schoolName: this.schoolName,
      }
    }).then(response=>{
      console.log(response.data.matriculantStatistic);
      this.matriculantAll=response.data.matriculantStatistic
    }).catch(err=>{
      console.log(err);
      
    })
    
    }
  }
}
</script>
<style>

</style>
