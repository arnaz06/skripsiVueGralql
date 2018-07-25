<template>
  <div id="page-container">
      <!-- Main Container -->
      <main id="main-container">
        <!-- Page Content -->
        <div class="content content-boxed">
          <!-- Material Design -->
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
              <div class="block block-themed">

                <div class="block-header bg-modern">
                  <ul class="block-options">
                    <li>
                      <button type="button" data-toggle="block-option" data-action="fullscreen_toggle">
                        <i class="si si-size-fullscreen"></i>
                      </button>
                    </li>
                  </ul>
                  <h3 class="block-title">FORM PENDAFTARAN MAHASISWA</h3>
                </div>
                <div class="block block-themed block-rounded" id="box-alert2rem">
                  <div class="block-header bg-white">
                    <ul class="block-options">
                      <li>
                        <button type="button" id="box-alert">
                          <i class="fa fa-remove text-danger"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="block-content bg-success text-white">
                    <p>
                      Panitia Penerimaan Mahasiswa Baru Udinus mengingatkan pada seluruh calon mahasiswa untuk selalu waspada dan berhati-hati
                      terhadap segala jenis penipuan yang mengatasnamakan Panitia Penerimaan Mahasiswa Baru Udinus. Untuk pembayaran
                      transfer menggunakan nomor rekening atas nama Universitas Dian Nuswantoro (bukan rekening a/n pribadi)
                      dan Panitia tidak memungut biaya lain selain yang diinformasikan melalui surat resmi. Selain itu segala
                      kegiatan dan informasi tentang Penerimaan Mahasiswa Baru Udinus akan selalu di publikasikan di website
                      resmi www.dinus.ac.id.
                      <b>Terima kasih</b>
                    </p>
                  </div>
                  <hr>
                </div>
                <div class="block block-themed block-rounded">
                  <div class="block-content">
                    <p>
                      Jika Anda sudah pernah melakukan pendaftaran namun tidak bisa login, jangan melakukan pendaftaran kembali (berkali-kali).
                      Hubungi customer service kami jika Anda menemui kesulitan login. Data pendaftaran yang kembar akan kami
                      hapus.
                    </p>
                    <p>
                      Sebelum mengisi formulir di bawah ini, sangat disarankan untuk membaca dan memahami informasi jalur pendaftaran yang dapat
                      Anda temukan di
                      <a href="#">
                        <b>SINI</b>
                      </a>
                    </p>
                  </div>
                </div>
                <div class="block-content block-content-full">
                  <div class="block block-transparent pull-r-l">
                    <form class="form-horizontal" @submit.prevent="createMatriculant"  method="POST">
                      <!-- form A -->
                      <div class="block-header bg-gray-lighter">
                        <ul class="block-options">
                          <li>
                            <span>
                              <em class="text-muted">tidak boleh kosong</em>
                            </span>form
                          </li>
                          <li>
                            <span>
                              <i class="fa fa-dot-circle-o text-danger"></i>
                            </span>
                          </li>
                        </ul>
                        <h3 class="block-title">
                          <b>A. Data Umum</b>
                        </h3>
                      </div>
                      <div class="block-content">
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="regisGroup">Gelombang Pendafaran</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control-static"  v-model="regisGroupId">
                          </div>
                        </div>
                        <!-- <div class="form-group">
                          <label class="col-md-4 control-label" for="jenis_pendaftaran">Jenis Pendafaran</label>
                          <div class="col-md-8">
                            <select required name="" v-model="type" class="form-control" id="jenis_pendaftaran">
                              <option value="">...</option>
                            </select>
                          </div>
                        </div> -->
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="nisn">NISN</label>
                          <div class="col-md-8">
                            <input required name="" type="text" v-model="nisn" class="form-control" id="nisn" placeholder="masukkan NISN anda...">
                          </div>
                        </div>
                      </div>
                      <!-- end form A -->

                      <!-- form B -->
                      <div class="block-header bg-gray-lighter">
                        <ul class="block-options">
                          <li>
                            <span>
                              <em class="text-muted">tidak boleh kosong</em>
                            </span>
                          </li>
                          <li>
                            <span>
                              <i class="fa fa-dot-circle-o text-danger"></i>
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
                            <input required name="nik" type="text" v-model="nik" class="form-control" id="nik" placeholder="masukkan NIK anda...">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="nama_lengkap">Nama Lengkap</label>
                          <div class="col-md-8">
                            <input required name="fullName" type="text" v-model="fullName" class="form-control" id="fullName" placeholder="masukkan Nama Lengkap anda...">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="gender">Jenis Kelamin</label>
                          <div class="col-md-8">
                            <select required name="gender" v-model="gender" class="form-control" id="gender">
                              <option value="MALE">LAKI-LAKI</option>
                              <option value="FEMALE">PEREMPUAN</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="golongan_darah">Golongan Darah</label>
                          <div class="col-md-8">
                            <select required name="bloodType" v-model="bloodType" class="form-control" id="bloodType">
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="AB">AB</option>
                              <option value="O">O</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="tempat_lahir">Tempat Lahir</label>
                          <div class="col-md-8">
                            <input required name="birthPlace" type="text" v-model="birthPlace" class="form-control" id="birthPlace" placeholder="dimana Tempat Lahir anda...">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="birth">Tanggal Lahir</label>
                          <div class="col-md-8">
                            <input required name="birth" v-model="birth" class="js-datepicker form-control" id="birth" data-date-format="mm/dd/yy" placeholder="mm/dd/yy" type="text">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="religion">Agama</label>
                          <div class="col-md-8">
                            <select required name="religion"  v-model="religion" class="form-control" id="religion">
                              <option value="ISLAM">ISLAM</option>
                              <option value="KRISTEN">KRISTEN</option>
                              <option value="KATOLIK">KATOLIK</option>
                              <option value="HINDU">HINDU</option>
                              <option value="BUDHA">BUDHA</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="citizenship">Kewarganegaraan</label>
                          <div class="col-md-8">
                            <select required name="citizenship" v-model="citizenship" class="js-select2 form-control" id="citizenship" style="width: 100%;" data-placeholder="pilih Kewarganegaraan anda..">
                              <option></option>
                              <option value="Indonesia">Indonesia</option>
                            </select>
                          </div>
                        </div>
                        <hr>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="fatherName">Nama Ayah/Wali</label>
                          <div class="col-md-8">
                            <input required name="fatherName" v-model="fatherName" type="text" class="form-control" id="fatherName" placeholder="siapa nama Ayah/Wali anda...">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="fatherBirth">Tanggal Lahir Ayah/Wali</label>
                          <div class="col-md-8">
                            <input required name="fatherBirth" v-model="fatherBirth" class="js-datepicker form-control" id="fatherBirth" data-date-format="mm/dd/yy" placeholder="mm/dd/yy"
                              type="text">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="motherName">Nama Ibu</label>
                          <div class="col-md-8">
                            <input required name="motherName" v-model="motherName" type="text" class="form-control" id="motherName" placeholder="siapa nama Ibu anda...">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="motherBirth">Tanggal Lahir Ibu</label>
                          <div class="col-md-8">
                            <input required name="motherBirth" v-model="motherBirth" class="js-datepicker form-control" id="motherBirth" data-date-format="mm/dd/yy" placeholder="mm/dd/yy"
                              type="text">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="parentsJob">Pekerjaan Orang Tua/Wali</label>
                          <div class="col-md-8">
                            <input required name="parentsJob" v-model="parentsJob" class="js-datepicker form-control" id="parentsJob" 
                              type="text">
                          </div>
                        </div>
                        <hr>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="originId">ID Propinsi Asal</label>
                          <div class="col-md-8">
                            <input required name="originId" v-model="originId" class="js-datepicker form-control" id="originId"
                              type="text">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="address">Alamat Asal</label>
                          <div class="col-md-8">
                            <input required name="address" v-model="address" type="text" class="form-control" id="address" placeholder="asal Desa/Kelurahan anda...">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="phone">Telepon</label>
                          <div class="col-md-8">
                            <input required name="phone" v-model="phone" type="text" class="form-control" id="phone" placeholder="masukkan nomor Telepon anda...">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="email">Email</label>
                          <div class="col-md-8">
                            <input required name="email" v-model="email" type="email" class="form-control" id="email" placeholder="masukkan Email anda...">
                          </div>
                        </div>
                      </div>
                      <!-- end form B -->

                      <!-- form C -->
                      <div class="block-header bg-gray-lighter">
                        <ul class="block-options">
                          <li>
                            <span>
                              <em class="text-muted">tidak boleh kosong</em>
                            </span>
                          </li>
                          <li>
                            <span>
                              <i class="fa fa-dot-circle-o text-danger"></i>
                            </span>
                          </li>
                        </ul>
                        <h3 class="block-title">
                          <b>C. Data Pendidikan Terkahir</b>
                        </h3>
                      </div>
                      <div class="block-content">
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="lastEducationId"> ID Pendidikan Terakhir</label>
                          <div class="col-md-8">
                            <input required name="lastEducationId" v-model="lastEducationId" type="text" class="form-control" id="lastEducationId" >
                          </div>
                        </div>
                      </div>
                      <!-- end form C -->

                      <!-- form D -->
                      <div class="block-header bg-gray-lighter">
                        <ul class="block-options">
                          <li>
                            <span>
                              <em class="text-muted">tidak boleh kosong</em>
                            </span>
                          </li>
                          <li>
                            <span>
                              <i class="fa fa-dot-circle-o text-danger"></i>
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
                            <input required name="majorOne" v-model="majorOne" type="text" class="form-control" id="majorOne" >
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="pilihan_kedua">Pilihan II</label>
                           <div class="col-md-8">
                            <input required name="majorTwo" v-model="majorTwo" type="text" class="form-control" id="majorTwo" >
                          </div>
                        </div>
                      </div>
                      <!-- end form D -->

                      <!-- form E -->
                      <div class="block-header bg-gray-lighter">
                        <ul class="block-options">
                          <li>
                            <span>
                              <em class="text-muted">tidak boleh kosong</em>
                            </span>
                          </li>
                          <li>
                            <span>
                              <i class="fa fa-dot-circle-o text-danger"></i>
                            </span>
                          </li>
                        </ul>
                        <h3 class="block-title">
                          <b>E. PASSWORD UNTUK EDIT / CETAK DATA</b>
                        </h3>
                      </div>
                      <div class="block-content">
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="password">Password</label>
                          <div class="col-md-8">
                            <input required name="password" v-model="password" type="password" class="form-control" id="password" placeholder="masukkan password anda...">
                          </div>
                        </div>
                      </div>
                      <!-- end form E -->

                      <!-- form F -->
                      <div class="block-header bg-gray-lighter">
                        <ul class="block-options">
                          <li>
                            <span>
                              <em class="text-muted">tidak boleh kosong</em>
                            </span>
                          </li>
                          <li>
                            <span>
                              <i class="fa fa-dot-circle-o text-danger"></i>
                            </span>
                          </li>
                        </ul>
                        <h3 class="block-title">
                          <b>E. PASSWORD UNTUK EDIT / CETAK DATA</b>
                        </h3>
                      </div>
                      <div class="block-content">
                        <div class="form-group">
                          <label class="col-md-12 control-label " for="dari_mana">
                            Dari manakah Anda mengetahui
                            <span class="text-modern">Universitas Dian Nuswantoro</span> ?
                          </label>
                          <div class="col-md-12">
                            <label class="css-input css-radio css-radio-sm css-radio-info">
                              <input type="radio" value="TEMAN" v-model="sourceInformation" name="radio-group1" checked>
                              <span></span> Teman
                            </label>
                            <label class="css-input css-radio css-radio-sm css-radio-info">
                              <input type="radio" value="KELUARGA" v-model="sourceInformation" name="radio-group1">
                              <span></span> Keluarga
                            </label>
                            <label class="css-input css-radio css-radio-sm css-radio-info">
                              <input type="radio" value="FORUM" v-model="sourceInformation" name="radio-group1">
                              <span></span> Forum
                            </label>
                            <label class="css-input css-radio css-radio-sm css-radio-info">
                              <input type="radio" value="GOOGLE" v-model="sourceInformation" name="radio-group1">
                              <span></span> Google
                            </label>
                            <label class="css-input css-radio css-radio-sm css-radio-info">
                              <input type="radio" value="MEDIA CETAK" v-model="sourceInformation" name="radio-group1">
                              <span></span> Media Cetak
                            </label>
                            <label class="css-input css-radio css-radio-sm css-radio-info">
                              <input type="radio" value="BALIHO" v-model="sourceInformation" name="radio-group1">
                              <span></span> Baliho
                            </label>
                            <label class="css-input css-radio css-radio-sm css-radio-info">
                              <input type="radio" value="YOUTUBE" v-model="sourceInformation" name="radio-group1">
                              <span></span> Youtube
                            </label>
                            <label class="css-input css-radio css-radio-sm css-radio-info">
                              <input type="radio" value="FACEBOOK" v-model="sourceInformation" name="radio-group1">
                              <span></span> Facebook
                            </label>
                          </div>
                        </div>
                      </div>
                      <!-- end form F -->
                      <div class="alert bg-danger text-white">
                        Pastikan data yang sudah anda isikan adalah benar sebelum melakukan penyimpanan formulir !
                      </div>
                      <!-- simpan -->
                      <div class="form-group text-center">
                        <div class="col-md-12">
                          <button class="btn btn-lg btn-success"  type="submit">Simpan Formulir</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END Material Design -->
        </div>
        <!-- END Page Content -->
      </main>
      <!-- END Main Container -->
    </div>
</template>
<script>
import {CREATE_MATRICULANT} from '../graphql'


export default{
  name: 'CreateMatriculant',
  data(){
    return{
      nik:'',
      nisn:'',
      fullName:'',
      gender:'',
      bloodType:'',
      birthPlace:'',
      birth:'',
      religion:'',
      citizenship:'',
      fatherName:'',
      fatherBirth:'',
      motherName:'',
      motherBirth:'',
      parentsJob:'',
      email:'',
      phone:'',
      password:'',
      sourceInformation:'',
      regisGroupId:'',
      address:'',
      status:'',
      originId:'',
      lastEducationId:'',
      majorOne:'',
      majorTwo:'',
      userId:null
    }
  },
  methods:{
    createMatriculant(){
      console.log(this.majorOne)
      this.$apollo.mutate({
        mutation: CREATE_MATRICULANT,
        variables:{
          NIK: this.nik,
          NISN: this.nisn,
          fullName: this.fullName,
          gender: this.gender,
          bloodType: this.bloodType,
          birthPlace: this.birthPlace,
          birth: this.birth,
          religion: this.religion,
          citizenship: this.citizenship,
          fatherName: this.fatherName,
          fatherBirth: this.fatherBirth,
          motherName: this.motherName,
          motherBirth: this.motherBirth,
          parentsJob: this.parentsJob,
          email: this.email,
          phone: this.phone,
          password: this.password,
          sourceInformation: this.sourceInformation,
          RegistrationGroup: parseInt(this.regisGroupId),
          address: this.address,
          status: "Mundur",
          Origin: parseInt(this.originId),
          LastEducation: parseInt(this.lastEducationId),
          majorOne: parseInt(this.majorOne),
          majorTwo: parseInt(this.majorTwo),
          userId: 2
        }
      }).then(response=>{
        console.log(response)
        alert('berhasil hore')
      }).catch(err=>{
        console.log(err)
        alert(err.networkError)
      })
    }
  }
}
</script>
<style>
</style>
