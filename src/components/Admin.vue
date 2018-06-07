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
                <a href="#">
                  <i class="si si-speedometer"></i>
                  <span class="sidebar-mini-hide">{content.menu}</span>
                </a>
              </li>
              <li class="nav-main-heading">
                <span class="sidebar-mini-hide">{header.nav}</span>
              </li>
              <li>
                <a class="nav-submenu" href="#">
                  <i class="si si-badge"></i>
                  <span class="sidebar-mini-hide">{content.menu}</span>
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
        <h2>{dashboard.title}</h2>
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
        <div class="row">
          <div class="col-sm-6 col-md-3 col-xs-6">
            <a class="block block-link-hover3 text-center" href="javascript:void(0)">
              <div class="block-content block-content-full">
                <div class="h1 font-w700 text-success" data-toggle="countTo" data-to="10"></div>
              </div>
              <div class="block-content block-content-full block-content-mini bg-gray-lighter text-success font-w600">{Green}</div>
            </a>
          </div>
          <div class="col-sm-6 col-md-3 col-xs-6">
            <a class="block block-link-hover3 text-center" href="javascript:void(0)">
              <div class="block-content block-content-full">
                <div class="h1 font-w700 text-danger" data-toggle="countTo" data-to="20"></div>
              </div>
              <div class="block-content block-content-full block-content-mini bg-gray-lighter text-danger font-w600">{Red}</div>
            </a>
          </div>
          <div class="col-sm-6 col-md-3 col-xs-6">
            <a class="block block-link-hover3 text-center" href="javascript:void(0)">
              <div class="block-content block-content-full">
                <div class="h1 font-w700 text-info" data-toggle="countTo" data-to="30"></div>
              </div>
              <div class="block-content block-content-full block-content-mini bg-gray-lighter  text-info font-w600">{Blue}</div>
            </a>
          </div>
          <div class="col-sm-6 col-md-3 col-xs-6">
            <a class="block block-link-hover3 text-center" href="javascript:void(0)">
              <div class="block-content block-content-full">
                <div class="h1 font-w700  text-warning" data-toggle="countTo" data-to="40"></div>
              </div>
              <div class="block-content block-content-full block-content-mini bg-gray-lighter text-warning font-w600">{Yellow}</div>
            </a>
          </div>
        </div>
        <!-- END Header Tiles -->
        <div class="row">
          <div class="col-sm-12">
            <!-- Stacked Chart -->
            <div class="block">
              <div class="block-header">
                <ul class="block-options">
                  <li>
                    <button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo">
                      <i class="si si-refresh"></i>
                    </button>
                  </li>
                </ul>
                <h3 class="block-title">{graph}</h3>
              </div>
              <div class="block-content block-content-full">
                <!-- Stacked Chart Container -->
                <canvas id="myChart" width="400"></canvas>
              </div>
            </div>
            <!-- END Stacked Chart -->
          </div>
        </div>
        <!-- Dynamic Table Full -->
        <div class="block">
          <div class="block-header">
            <h3 class="block-title">{table.name}
              <small>{table.full.function}</small>
            </h3>
          </div>
          <div class="block-content">
            <!-- DataTables init on table by adding .js-dataTable-full class, functionality initialized in js/pages/base_tables_datatables.js -->
            <table class="table table-bordered table-striped js-dataTable-full">
              <thead>
                <tr>
                  <th class="text-center" style="width: 3%">{col.1}</th>
                  <th>{col.2}</th>
                  <!-- hidden : ndee hidden pas posisi -scale -->
                  <th class="hidden-xs">{col.3}</th>
                  <th class="hidden-xs" style="width: 15%;">{col.4}</th>
                  <th class="text-center" style="width: 10%;">{col.5}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">1</td>
                  <td class="font-w600">A</td>
                  <td class="hidden-xs">A.</td>
                  <td class="hidden-xs">
                    <span class="label label-info">A.info</span>
                    <span class="label label-danger">A.danger</span>
                    <span class="label label-warning">A.warning</span>
                    <span class="label label-success">A.success</span>
                  </td>
                  <td class="text-center">
                    <!-- ngmong wae nk butuh di tambahi opo -->
                    <div class="btn-group">
                      <button class="btn btn-xs btn-info" type="button" data-toggle="tooltip" title="View">
                        <i class="fa fa-eye"></i>
                      </button>
                      <button class="btn btn-xs btn-warning" type="button" data-toggle="tooltip" title="Edit">
                        <i class="fa fa-pencil"></i>
                      </button>
                      <button class="btn btn-xs btn-danger" type="button" data-toggle="tooltip" title="Remove">
                        <i class="fa fa-times"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">2</td>
                  <td class="font-w600">B</td>
                  <td class="hidden-xs">B</td>
                  <td class="hidden-xs">
                    <span class="label label-info">B.info</span>
                  </td>
                  <td class="text-center">
                    <div class="btn-group">
                      <button class="btn btn-xs btn-info" type="button" data-toggle="tooltip" title="View">
                        <i class="fa fa-eye"></i>
                      </button>
                      <button class="btn btn-xs btn-warning" type="button" data-toggle="tooltip" title="Edit">
                        <i class="fa fa-pencil"></i>
                      </button>
                      <button class="btn btn-xs btn-danger" type="button" data-toggle="tooltip" title="Remove">
                        <i class="fa fa-times"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
        <!-- END Dynamic Table Full -
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
export default {
  mounted () {
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
  }
}
</script>

<style lang="css">
</style>
