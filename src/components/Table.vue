<template>
  <div class="block">
          <div class="block-header">
            <h3 class="block-title">Tabel Calon Mahasiswa
            </h3>
          </div>
          <div class="block-content">
            <div class="row">
            <form >
              <div class="col-md-3">
                <input type="text" class="form-control-static" placeholder="Tahun" v-model="date" @keypress.enter="searchMatriculats">
              </div>
              <div class="col-md-3">
                <input type="text" class="form-control-static" placeholder="Nama Sekolah" v-model="schoolName" @keypress.enter="searchMatriculats">
              </div>
              <div class="col-md-3">
              <input type="text" class="form-control-static" placeholder="Golongan Pendaftaran" v-model="regisGroup" @keypress.enter="searchMatriculats">
              </div>
              <div class="col-md-3">
              <select name="status" v-model="status"  class="form-control"  id="status" >
                              <option value="Semua" selected>Semua</option>
                              <option value="Mundur">Mundur</option>
                              <option value="Registrasi">Registrasi</option>
                              <option value="Ujian">Ujian</option>
                              <option value="Daftar">Daftar</option>
              </select>
              </div>
            </form>
            </div>
            <!-- DataTables init on table by adding .js-dataTable-full class, functionality initialized in js/pages/base_tables_datatables.js -->
            <table class="table table-bordered table-striped ">
              <thead>
                <tr>
                  <th class="text-center" style="width: 3%">ID</th>
                  <th>NISN</th>
                  <!-- hidden : ndee hidden pas posisi -scale -->
                  <th class="hidden-xs">Name</th>
                  <th class="hidden-xs">Status</th>
                  <th class="hidden-xs">Tanggal Daftar</th>
                  <th class="text-center" style="width: 10%;">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="matriculant in matriculantAll" :key="matriculant.id">
                  <td class="text-center">{{matriculant.id}}</td>
                  <td class="font-w600">{{matriculant.NISN}}</td>
                  <td class="font-w600">{{matriculant.fullName}}</td>
                  <td class="font-w600">{{matriculant.status}}</td>
                  <td class="font-w600">{{matriculant.createdAt}}</td>
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

export default {
  name: 'Table',
  data(){
    return{
      matriculantAll: [],
      status: '',
      regisGroup:'',
      date: '',
      schoolName:'',
      matriculantId:'',
    }
  },
  watch:{
    status(){
      if(this.status=='Semua'){
        this.matriculants()
      }else{
        this.searchMatriculats()
      }
    }
  },
  mounted(){
    this.matriculants()
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
      console.log(err)
    })
    },
    matriculants(){
      this.$apollo.query({
        query:MATRICULANT_ALL
      }).then(response=>{
        console.log(response);
        this.matriculantAll=response.data.matriculantAll
    }).catch(err=>{
      console.log(err)
    })
    }
  }
}
</script>
<style>

</style>
