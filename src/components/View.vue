<template>
      <div class="content content-boxed">
        <!-- Material Design -->
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <div class="block block-themed">

              <div class="block-header bg-success">
                <ul class="block-options">
                  <li data-toggle="tooltip" data-placement="left" data-original-title="kembali">
                    <a href="dashboard.html"><i class="fa fa-arrow-left"></i></a>
                  </li>
                </ul>
                <h3 class="block-title">FORM ID : {form.id}</h3>
              </div>
              
              <div class="block-content block-content-full">
                <div class="block block-transparent pull-r-l">
                  <div class="form-horizontal">
                    <!-- form A -->
                    <div class="block-content" style="margin-top:-25px;">
                      <div class="form-group">
                        <label class="col-md-4 control-label text-danger" for="gelombang_pendaftaran"><b>Status</b></label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static text-danger"  id="gelombang_pendaftaran"><b>{{status.toUpperCase()}}</b></div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label " for="gelombang_pendaftaran"><b>Ganti Status</b></label>
                        <div class="col-md-8">
                           <select required name="status"  v-model="status" class="form-control" id="status">
                              <option value="Mundur">Mundur</option>
                              <option value="Daftar">Daftar</option>
                              <option value="Ujian">Ujian</option>
                              <option value="Registrasi">Registrasi</option>  
                            </select>
                        </div>
                      </div>
                    </div>
                    <div class="block-header bg-gray-lighter">
                      <ul class="block-options">  
                        <li>
                          <span>
                            <i class="si si-check text-success"></i>
                          </span>
                        </li>
                      </ul>
                      <h3 class="block-title">
                        <b>A. Data Umum</b>
                      </h3>
                    </div>
                    
                    <div class="block-content">
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="gelombang_pendaftaran">Gelombang Pendafaran</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="gelombang_pendaftaran">{{matriculant.RegistrationGroup.group}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="jenis_pendaftaran">Jenis Pendafaran</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="jenis_pendaftaran">{{matriculant.RegistrationGroup.type}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="nisn">NISN</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="nisn">{{matriculant.NISN}}</div>
                        </div>
                      </div>
                    </div>
                    <!-- end form A -->

                    <!-- form B -->
                    <div class="block-header bg-gray-lighter">
                      <ul class="block-options">
                        
                        <li>
                          <span>
                            <i class="si si-check text-success"></i>
                          </span>
                        </li>
                      </ul>
                      <h3 class="block-title">
                        <b>B. Data Pribadi</b>
                      </h3>
                    </div>
                    <div class="block-content">
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="nomor_induk_kependudukan">Nomor Induk Kependudukan</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="nomor_induk_kependudukan">{{matriculant.NIK}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="nama_lengkap">Nama Lengkap</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="nama_lengkap">{{matriculant.fullName}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="jenis_kelamin">Jenis Kelamin</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="jenis_kelamin">{{matriculant.gender}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="golongan_darah">Golongan Darah</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="golongan_darah">{{matriculant.bloodType}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="tempat_lahir">Tempat Lahir</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="tempat_lahir">{{matriculant.birthPlace}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="tanggal_lahir">Tanggal Lahir</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="tanggal_lahir">{{matriculant.birth}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="agama">Agama</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="agama">{{matriculant.religion}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="kewarganegaraan">Kewarganegaraan</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="kewarganegaraan">{{matriculant.citizenship}}</div>
                        </div>
                      </div>
                      <hr>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="nama_ayah_wali">Nama Ayah/Wali</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="nama_ayah_wali">{{matriculant.fatherName}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="tanggal_lahir_wali">Tanggal Lahir Ayah/Wali</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="tanggal_lahir_wali">{{matriculant.fatherBirth}}</div> 
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="nama_ibu">Nama Ibu</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="nama_ibu">{{matriculant.motherName}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="tanggal_lahir_ibu">Tanggal Lahir Ibu</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="tanggal_lahir_ibu">{{matriculant.motherBirth}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="pekerjaan_wali">Pekerjaan Orang Tua/Wali</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="pekerjaan_wali">{{matriculant.parentsJob}}</div>
                        </div>
                      </div>
                      <hr>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="propinsi_asal">Propinsi Asal</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="propinsi_asal">{{matriculant.Origin.name}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="kota_kab_asal">Kota/Kabupaten Asal</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="kota_kab_asal">{{matriculant.Origin.district}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="kecamatan_asal">Kecamatan Asal</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="kecamatan_asal">{{matriculant.Origin.subDistrict}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="alamat">Alamat Asal</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="alamat">{{matriculant.address}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="kode_pos">Kode Pos</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="kode_pos">{{matriculant.Origin.zipcode}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="telepon">Telepon</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="telepon">{{matriculant.phone}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="email">Email</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="email">{{matriculant.email}}</div>
                        </div>
                      </div>
                    </div>
                    <!-- end form B -->

                    <!-- form C -->
                    <div class="block-header bg-gray-lighter">
                      <ul class="block-options">
                        
                        <li>
                          <span>
                            <i class="si si-check text-success"></i>
                          </span>
                        </li>
                      </ul>
                      <h3 class="block-title">
                        <b>C. Data Pendidikan Terkahir</b>
                      </h3>
                    </div>
                    <div class="block-content">
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="sekolah">Sekolah</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="sekolah">{{matriculant.LastEducation.schoolName}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="jurusan">Jurusan</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="jurusan">{{matriculant.LastEducation.major}}</div>
                        </div>
                      </div>
                    </div>
                    <!-- end form C -->

                    <!-- form D -->
                    <div class="block-header bg-gray-lighter">
                      <ul class="block-options">
                        
                      
                        <li>
                          <span>
                            <i class="si si-check text-success"></i>
                          </span>
                        </li>
                      </ul>
                      <h3 class="block-title">
                        <b>D. Program Studi Pilihan</b>
                      </h3>
                    </div>
                    <div class="block-content">
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="pilihan_pertama">Pilihan I</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="pilihan_pertama">{{matriculant.MatriculantMajors[0].Major.name}}</div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="pilihan_kedua">Pilihan II</label>
                        <div class="col-md-8">
                          <div name="" type="text" class="form-control-static" id="pilihan_kedua">{{matriculant.MatriculantMajors[1].Major.name}}</div>
                        </div>
                      </div>
                    </div>
                    <!-- end form D -->

                    <!-- form F -->
                    <div class="block-header bg-gray-lighter">
                      <ul class="block-options">
                        
                        <li>
                          <span>
                            <i class="si si-check text-success"></i>
                          </span>
                        </li>
                      </ul>
                      <h3 class="block-title">
                        <b>F. SURVEY</b>
                      </h3>
                    </div>
                    <div class="block-content">
                      <div class="form-group">
                        <label class="col-md-4 control-label" for="tanggal_daftar">Sumber Informasi </label>
                        <div class="col-md-8">
                           <div name="" type="text" class="form-control-static" id="sourceInformation">{{matriculant.sourceInformation}}</div>
                        </div>
                      </div>       
                        <label class="col-md-4 control-label" for="tanggal_daftar">Tanggal Daftar</label>
                        <div class="col-md-8">
                          <div name="" id="tanggal_daftar" class="form-control-static">{{matriculant.createdAt}}</div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>
<script>
import {MATRICULANT,CHANGE_STATUS} from '../graphql'
import { VariablesAreInputTypes } from 'graphql';
import { log } from 'async';
export default {
  data(){
    return{
      status: '',
      matriculant:{},
      
    }
  },
  watch:{
    status:{
      handler: function () {
        this.changeStatus()
      }
    }
  },
  mounted(){
    this.getMatriculant()
  },
  methods:{
    getMatriculant(){
      this.$apollo.query({
        query: MATRICULANT,
        variables:{
          id: this.$route.params.id
        } 
      }).then(response=>{
        console.log(response);
        this.matriculant=response.data.matriculant
        this.status= response.data.matriculant.status
      }).catch(err=>{
        console.log(err);
        
      })
    },
    changeStatus(){
      console.log('disini');
      this.$apollo.mutate({
        mutation: CHANGE_STATUS,
        variables:{
          id: this.$route.params.id,
          status: this.status
        }
      }).then(response=>{
        console.log(response);
      }).catch(err=>{
        console.log(err);
        
      })
    }
  }
}
</script>
<style>

</style>
