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
                    <form class="form-horizontal" action="#" method="">
                      <!-- form A -->
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
                          <b>A. Data Umum</b>
                        </h3>
                      </div>
                      <div class="block-content">
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="gelombang_pendaftaran">Gelombang Pendafaran</label>
                          <div class="col-md-8">
                            <div name="" type="text" class="form-control-static" id="gelombang_pendaftaran">{some.value}</div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="jenis_pendaftaran">Jenis Pendafaran</label>
                          <div class="col-md-8">
                            <select required name="" class="form-control" id="jenis_pendaftaran">
                              <option value="">...</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="nisn">NISN</label>
                          <div class="col-md-8">
                            <input required name="" type="text" class="form-control" id="nisn" placeholder="masukkan NISN anda...">
                            <div class="help-block text-right">
                              tidak tahu
                              <b>NISN</b> anda? cari
                              <a href="#">
                                <b>disini</b>
                              </a>
                            </div>
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
                            <input required name="" type="text" class="form-control" id="nomor_induk_kependudukan" placeholder="masukkan NIK anda...">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="nama_lengkap">Nama Lengkap</label>
                          <div class="col-md-8">
                            <input required name="" type="text" class="form-control" id="nama_lengkap" placeholder="masukkan Nama Lengkap anda...">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="jenis_kelamin">Jenis Kelamin</label>
                          <div class="col-md-8">
                            <select required name="" class="form-control" id="jenis_kelamin">
                              <option value="">...</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="golongan_darah">Golongan Darah</label>
                          <div class="col-md-8">
                            <select required name="" class="form-control" id="golongan_darah">
                              <option value="">...</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="tempat_lahir">Tempat Lahir</label>
                          <div class="col-md-8">
                            <input required name="" type="text" class="form-control" id="tempat_lahir" placeholder="dimana Tempat Lahir anda...">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="tanggal_lahir">Tanggal Lahir</label>
                          <div class="col-md-8">
                            <input required name="" class="js-datepicker form-control" id="tanggal_lahir" data-date-format="mm/dd/yy" placeholder="mm/dd/yy" type="text">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="agama">Agama</label>
                          <div class="col-md-8">
                            <select required name="" class="form-control" id="agama">
                              <option value="">...</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="kewarganegaraan">Kewarganegaraan</label>
                          <div class="col-md-8">
                            <select required name="" class="js-select2 form-control" id="kewarganegaraan" style="width: 100%;" data-placeholder="pilih Kewarganegaraan anda..">
                              <option></option>
                              <option value="1">Indonesia</option>
                            </select>
                          </div>
                        </div>
                        <hr>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="nama_ayah_wali">Nama Ayah/Wali</label>
                          <div class="col-md-8">
                            <input required name="" type="text" class="form-control" id="nama_ayah_wali" placeholder="siapa nama Ayah/Wali anda...">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="tanggal_lahir_wali">Tanggal Lahir Ayah/Wali</label>
                          <div class="col-md-8">
                            <input required name="" class="js-datepicker form-control" id="tanggal_lahir_wali" data-date-format="mm/dd/yy" placeholder="mm/dd/yy"
                              type="text">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="nama_ibu">Nama Ibu</label>
                          <div class="col-md-8">
                            <input required name="" type="text" class="form-control" id="nama_ibu" placeholder="siapa nama Ibu anda...">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="tanggal_lahir_ibu">Tanggal Lahir Ibu</label>
                          <div class="col-md-8">
                            <input required name="" class="js-datepicker form-control" id="tanggal_lahir_ibu" data-date-format="mm/dd/yy" placeholder="mm/dd/yy"
                              type="text">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="pekerjaan_wali">Pekerjaan Orang Tua/Wali</label>
                          <div class="col-md-8">
                            <select required name="" class="js-select2 form-control" id="pekerjaan_wali" style="width: 100%;" data-placeholder="Pekerjaan Ortu/Wali..">
                              <option></option>
                              <option value="1">Programmer</option>
                            </select>
                          </div>
                        </div>
                        <hr>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="propinsi_asal">Propinsi Asal</label>
                          <div class="col-md-8">
                            <select required name="" class="js-select2 form-control" id="propinsi_asal" style="width: 100%;" data-placeholder="asal Propinsi anda..">
                              <option></option>
                              <option value="1">Prop. A</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="kota_kab_asal">Kota/Kabupaten Asal</label>
                          <div class="col-md-8">
                            <select required name="" class="js-select2 form-control" id="kota_kab_asal" style="width: 100%;" data-placeholder="asal Kota/Kabupaten anda..">
                              <option></option>
                              <option value="1">Kota. A</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="kecamatan_asal">Kecamatan Asal</label>
                          <div class="col-md-8">
                            <select required name="" class="js-select2 form-control" id="kecamatan_asal" style="width: 100%;" data-placeholder="asal Kecamatan anda..">
                              <option></option>
                              <option value="1">Kec. A</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="desa_kelurahan">Desa/Kelurahan</label>
                          <div class="col-md-8">
                            <input required name="" type="text" class="form-control" id="desa_kelurahan" placeholder="asal Desa/Kelurahan anda...">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="dusun">Dusun Asal</label>
                          <div class="col-md-8">
                            <input required name="" type="text" class="form-control" id="dusun" placeholder="asal Dusun anda...">
                            <div class="help-block text-right">
                              jika alamat didahului dengan nama dusun, isian ini bisa diganti dengan tanda
                              <b>(-)</b>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="Alamat">Alamat Asal</label>
                          <div class="col-md-8">
                            <textarea name="" class="js-maxlength form-control" id="alamat" rows="3" maxlength="100" placeholder="tuliskan Alamat Lengkap anda"
                              data-always-show="true"></textarea>
                            <div class="help-block text-right">
                              Alamat ditulis maksimal sampai nomor rumah. Jika tidak ada nama jalan, tuliskan nama kampung/dusunnya.
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="rt_rw">RT/RW</label>
                          <div class="col-md-8">
                            <div class="col-md-5" style="margin-left: 0;padding-left: 0">
                              <input required name="" type="text" class="form-control" id="rt_rw" placeholder="RT...">
                            </div>
                            <div class="col-md-2">
                              <div class="form-control" style="border: none;">/</div>
                            </div>
                            <div class="col-md-5 text-right" style="margin-right: 0;padding-right: 0">
                              <input required name="" type="text" class="form-control" id="rt_rw" placeholder="RW...">
                            </div>
                            <div class="help-block text-right">Tuliskan 3 digit angka arab, bukan angka romawi.
                              <br> Contoh : 002, 012 </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="kode_pos">Kode Pos</label>
                          <div class="col-md-8">
                            <input required name="" type="text" class="form-control" id="kode_pos" placeholder="masukkan Kode pos anda...">
                            <div class="help-block text-right">
                              Tidak tahu kodepos Anda? Cari
                              <a href="#">
                                <b>di sini</b>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="telepon">Telepon</label>
                          <div class="col-md-8">
                            <input required name="" type="text" class="form-control" id="telepon" placeholder="masukkan nomor Telepon anda...">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="handphone">Handphone</label>
                          <div class="col-md-8">
                            <input required name="" type="text" class="form-control" id="handphone" placeholder="masukkan nomor Handphone anda...">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="email">Email</label>
                          <div class="col-md-8">
                            <input required name="" type="email" class="form-control" id="email" placeholder="masukkan Email anda...">
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
                          <label class="col-md-4 control-label" for="propinsi_pendidikan">Propinsi</label>
                          <div class="col-md-8">
                            <select required name="" class="js-select2 form-control" id="propinsi_pendidikan" style="width: 100%;" data-placeholder="asal Propinsi Pendidikan anda..">
                              <option></option>
                              <option value="1">Prop. A</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="kota_kab_pendidikan">Kota/Kabupaten</label>
                          <div class="col-md-8">
                            <select required name="" class="js-select2 form-control" id="kota_kab_pendidikan" style="width: 100%;" data-placeholder="asal Kota/Kabupaten Pendidikan anda..">
                              <option></option>
                              <option value="1">Kota. A</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="sekolah">Sekolah</label>
                          <div class="col-md-8">
                            <select required name="" class="js-select2 form-control" id="sekolah" style="width: 100%;" data-placeholder="asal Sekolah anda..">
                              <option></option>
                              <option value="1">SMA/K. A</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="jurusan">Jurusan</label>
                          <div class="col-md-8">
                            <select required name="" class="js-select2 form-control" id="jurusan" style="width: 100%;" data-placeholder="Jurusan yg anda ampu..">
                              <option></option>
                              <option value="1">SMA/K. A</option>
                            </select>
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
                            <select required name="" class="js-select2 form-control" id="pilihan_pertama" style="width: 100%;" data-placeholder="::PILIHAN::">
                              <option></option>
                              <option value="1">JURUSAN</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="pilihan_kedua">Pilihan II</label>
                          <div class="col-md-8">
                            <select required name="" class="js-select2 form-control" id="pilihan_kedua" style="width: 100%;" data-placeholder="::PILIHAN::">
                              <option></option>
                              <option value="1">JURUSAN</option>
                            </select>
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
                            <input required name="" type="password" class="form-control" id="password" placeholder="masukkan password anda...">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="ulangi_password">Ulangi Password</label>
                          <div class="col-md-8">
                            <input required name="" type="password" class="form-control" id="ulangi_password" placeholder="...dan ulangi password anda.">
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
                              <input type="radio" name="radio-group1" checked>
                              <span></span> Teman
                            </label>
                            <label class="css-input css-radio css-radio-sm css-radio-info">
                              <input type="radio" name="radio-group1">
                              <span></span> Keluarga
                            </label>
                            <label class="css-input css-radio css-radio-sm css-radio-info">
                              <input type="radio" name="radio-group1">
                              <span></span> Forum
                            </label>
                            <label class="css-input css-radio css-radio-sm css-radio-info">
                              <input type="radio" name="radio-group1">
                              <span></span> Google
                            </label>
                            <label class="css-input css-radio css-radio-sm css-radio-info">
                              <input type="radio" name="radio-group1">
                              <span></span> Media Cetak
                            </label>
                            <label class="css-input css-radio css-radio-sm css-radio-info">
                              <input type="radio" name="radio-group1">
                              <span></span> Baliho
                            </label>
                            <label class="css-input css-radio css-radio-sm css-radio-info">
                              <input type="radio" name="radio-group1">
                              <span></span> Youtube
                            </label>
                            <label class="css-input css-radio css-radio-sm css-radio-info">
                              <input required type="radio" name="radio-group1">
                              <span></span> Facebook
                            </label>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-4 control-label" for="tanggal_daftar">Tanggal Daftar</label>
                          <div class="col-md-8">
                            <div name="" id="tanggal_daftar" class="form-control-static">{some.value}</div>
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
                          <button class="btn btn-lg btn-success" type="submit">Simpan Formulir</button>
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
</script>
<style>
</style>
