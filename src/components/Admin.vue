<template>
  <div id="page-container" class="sidebar-l sidebar-o side-scroll header-navbar-fixed">
  <!-- Sidebar -->
    <nav id="sidebar">
      <!-- Sidebar Scroll Container -->
      <div id="sidebar-scroll">
        <!-- Sidebar Content -->
        <!-- Adding .sidebar-mini-hide to an element will hide it when the sidebar is in mini mode -->
        <div class="sidebar-content">
          <!-- Side Header -->
          <div class="side-header side-content bg-white-op">
            <!-- Layout API, functionality initialized in App() -> uiLayoutApi() -->
            <button class="btn btn-link text-gray pull-right hidden-md hidden-lg" type="button" data-toggle="layout" data-action="sidebar_close">
              <i class="fa fa-times"></i>
            </button>
            <!-- Themes functionality initialized in App() -> uiHandleTheme() -->
            <div class="btn-group pull-right">
              <button class="btn btn-link text-gray dropdown-toggle" data-toggle="dropdown" type="button">
                <i class="si si-drop"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-right font-s13 sidebar-mini-hide">
                <li>
                  <a data-toggle="theme" data-theme="default" tabindex="-1" href="javascript:void(0)">
                    <i class="fa fa-circle text-default pull-right"></i>
                    <span class="font-w600">Default</span>
                  </a>
                </li>
                <li>
                  <a data-toggle="theme" data-theme="assets/css/themes/amethyst.min.css" tabindex="-1" href="javascript:void(0)">
                    <i class="fa fa-circle text-amethyst pull-right"></i>
                    <span class="font-w600">Amethyst</span>
                  </a>
                </li>
                <li>
                  <a data-toggle="theme" data-theme="assets/css/themes/city.min.css" tabindex="-1" href="javascript:void(0)">
                    <i class="fa fa-circle text-city pull-right"></i>
                    <span class="font-w600">City</span>
                  </a>
                </li>
                <li>
                  <a data-toggle="theme" data-theme="assets/css/themes/flat.min.css" tabindex="-1" href="javascript:void(0)">
                    <i class="fa fa-circle text-flat pull-right"></i>
                    <span class="font-w600">Flat</span>
                  </a>
                </li>
                <li>
                  <a data-toggle="theme" data-theme="assets/css/themes/modern.min.css" tabindex="-1" href="javascript:void(0)">
                    <i class="fa fa-circle text-modern pull-right"></i>
                    <span class="font-w600">Modern</span>
                  </a>
                </li>
                <li>
                  <a data-toggle="theme" data-theme="assets/css/themes/smooth.min.css" tabindex="-1" href="javascript:void(0)">
                    <i class="fa fa-circle text-smooth pull-right"></i>
                    <span class="font-w600">Smooth</span>
                  </a>
                </li>
              </ul>
            </div>
            <a class="h5 text-white" href="#">
              <i class="fa fa-circle-o-notch text-primary"></i>
              <span class="h4 font-w600 sidebar-mini-hide">{title}</span>
            </a>
          </div>
          <!-- END Side Header -->

          <!-- Side Content -->
          <div class="side-content">
            <ul class="nav-main">
              <li>
                <a href="http://localhost:8080/">
                  <i class="si si-speedometer"></i>
                  <span class="sidebar-mini-hide">Form Pendaftaran</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- END Side Content -->
        </div>
        <!-- Sidebar Content -->
      </div>
      <!-- END Sidebar Scroll Container -->
    </nav>
    <!-- END Sidebar -->

  <!-- Header -->
    <header id="header-navbar" class="content-mini content-mini-full">
    <!-- Header Navigation Left -->
    <ul class="nav-header pull-left">
      <li class="visible-md visible-xs visible-lg">
        <!-- Layout API, functionality initialized in App() -> uiLayoutApi() -->
        <button class="btn btn-default" data-toggle="layout" data-action="sidebar_toggle" type="button">
          <i class="fa fa-navicon"></i>
        </button>
      </li>
      <li>
        <h2>Dashboard</h2>
      </li>
    </ul>
    <ul class="nav-header pull-right">
      <li>
        <div class="btn-group">
          <button class="btn btn-default btn-image dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false">
            <img src="assets/img/avatars/avatar10.jpg" alt="Avatar">
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu dropdown-menu-right">
            <li class="dropdown-header">Profile</li>
            <li>
              <a tabindex="-1" href="base_pages_inbox.html">
                <i class="si si-envelope-open pull-right"></i>
                <span class="badge badge-primary pull-right">3</span>Inbox
              </a>
            </li>
            <li>
              <a tabindex="-1" href="base_pages_profile.html">
                <i class="si si-user pull-right"></i>
                <span class="badge badge-success pull-right">1</span>Profile
              </a>
            </li>
            <li>
              <a tabindex="-1" href="javascript:void(0)">
                <i class="si si-settings pull-right"></i>Settings
              </a>
            </li>
            <li class="divider"></li>
            <li class="dropdown-header">Actions</li>
            <li>
              <a tabindex="-1" href="base_pages_lock.html">
                <i class="si si-lock pull-right"></i>Lock Account
              </a>
            </li>
            <li>
              <a tabindex="-1" href="base_pages_login.html">
                <i class="si si-logout pull-right"></i>Log out
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <!-- END Header Navigation Left -->
  </header>
  <!-- END Header -->

  <!-- Main Container -->
    <main id="main-container">
      <!-- Page Content -->
      <div class="content content-boxed">
        <!-- Header Tiles -->
        <app-chart></app-chart>
        <!-- END Header Tiles -->
        
        <!-- Dynamic Table Full -->
       <app-table></app-table>
          
      </div>
        <!-- END Dynamic Table Full -->
      <!-- END Page Content -->
    </main>
  <!-- END Main Container -->

  <!-- Footer -->
  <footer id="page-footer" class="content-mini content-mini-full font-s12 bg-gray-lighter clearfix">
    <div class="pull-right">
      Crafted with
      <i class="fa fa-heart text-city"></i> by
      <a class="font-w600" href="#">Gladiator 2018</a>
    </div>
    <div class="pull-left">
      <a class="font-w600" href="http://goo.gl/6LF10W" target="_blank">OneUI 3.1</a> &copy;
      <span class="js-year-copy"></span>
    </div>
  </footer>
  <!-- END Footer -->
  </div>
  <!-- END Page Container -->
</div>
</template>
<script>
import Table from './Table.vue'
import Chart from './Chart.vue'
export default {
  components:{
    'app-table': Table,
    'app-chart': Chart
  }
}
</script>

<style lang="css">
</style>
