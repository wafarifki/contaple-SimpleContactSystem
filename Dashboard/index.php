<?php
    ob_start();
    session_start();
    if(!isset($_SESSION['login'])){
    	header('location:login.php');
    }
    
    include "koneksi.php";
?>

<!DOCTYPE html>
<html lang="id" class="js">

<head>
    <meta charset="utf-8">
    <meta name="author" content="Wafa Rifki Anafin">
    <meta name="author-website" content="https://wafarifki.tk">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Admin Panel - Simple Contact System">
    <!-- Fav Icon  -->
    <link rel="shortcut icon" href="images/favicon.png">
    <!-- Page Title  -->
    <title>Admin Panel | Simple Contact System</title>
    <!-- StyleSheets  -->
    <link rel="stylesheet" href="assets/css/sns.css?ver=1.0">
    <link id="skin-default" rel="stylesheet" href="assets/css/tema.css?ver=1.0">
</head>

<body class="nk-body bg-white has-sidebar ">
    <div class="nk-app-root">
        <!-- main @s -->
        <div class="nk-main ">
            <!-- sidebar @s -->
            <div class="nk-sidebar nk-sidebar-fixed " data-content="sidebarMenu">
                <div class="nk-sidebar-element nk-sidebar-head">
                    <div class="nk-sidebar-brand">
                        <a href="index.php" class="logo-link nk-sidebar-logo">
                            <img class="logo-light logo-img" src="images/logo.png" srcset="images/logo2x.png 2x" alt="logo">
                            <img class="logo-dark logo-img" src="images/logo-dark.png" srcset="images/logo-dark2x.png 2x" alt="logo-dark">
                        </a>
                    </div>
                    <div class="nk-menu-trigger mr-n2">
                        <a href="#" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em class="icon ni ni-arrow-left"></em></a>
                    </div>
                </div>
                <!-- .nk-sidebar-element -->
                <div class="nk-sidebar-element">
                    <div class="nk-sidebar-body" data-simplebar>
                        <div class="nk-sidebar-content">
                            <div class="nk-sidebar-menu">
                                <ul class="nk-menu">
                                    <li class="nk-menu-item">
                                        <a href="index.php" class="nk-menu-link">
                                            <span class="nk-menu-icon"><em class="icon ni ni-dashboard"></em></span>
                                            <span class="nk-menu-text">Beranda</span>
                                        </a>
                                    </li>

                                

                                    <li class="nk-menu-item">
                                        <a href="kontak.php" class="nk-menu-link">
                                            <span class="nk-menu-icon"><em class="icon ni ni-inbox-in"></em></span>
                                            <span class="nk-menu-text">Kelola Pesan Masuk</span>
                                        </a>
                                    </li>


                                    <li class="nk-menu-item">
                                        <a href="logout.php" class="nk-menu-link">
                                            <span class="nk-menu-icon"><em class="icon ni ni-signout"></em></span>
                                            <span class="nk-menu-text">Keluar</span>
                                        </a>
                                    </li>


                                </ul>
                                <!-- .nk-menu -->
                            </div>
                            <!-- .nk-sidebar-menu -->
                            <div class="nk-sidebar-footer">
                                <ul class="nk-menu nk-menu-footer">
                                    <li class="nk-menu-item">
                                        <a href="https://instagram.com/wafarifki_" class="nk-menu-link">
                                            <span class="nk-menu-icon"><em class="icon ni ni-instagram"></em></span>
                                            <span class="nk-menu-text">Ikuti Saya</span>
                                        </a>
                                    </li>
                                </ul>
                                <!-- .nk-footer-menu -->
                            </div>
                            <!-- .nk-sidebar-footer -->
                        </div>
                        <!-- .nk-sidebar-content -->
                    </div>
                    <!-- .nk-sidebar-body -->
                </div>
                <!-- .nk-sidebar-element -->
            </div>
            <!-- sidebar @e -->
            <!-- wrap @s -->
            <div class="nk-wrap ">
                <!-- main header @s -->
                <div class="nk-header nk-header-fixed is-light">
                    <div class="container-fluid">
                        <div class="nk-header-wrap">
                            <div class="nk-menu-trigger d-xl-none ml-n1">
                                <a href="#" class="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a>
                            </div>
                            <div class="nk-header-brand d-xl-none">
                                <a href="index.php" class="logo-link">
                                    <img class="logo-light logo-img" src="images/logo.png" srcset="images/logo2x.png 2x" alt="logo">
                                    <img class="logo-dark logo-img" src="images/logo-dark.png" srcset="images/logo-dark2x.png 2x" alt="logo-dark">
                                </a>
                            </div>
                            <div class="nk-header-tools">
                                <ul class="nk-quick-nav">
                                    <li class="dropdown user-dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                            <div class="user-toggle">
                                                <div class="user-avatar sm">
                                                    <em class="icon ni ni-user-alt"></em>
                                                </div>
                                                <div class="user-info d-none d-md-block">
                                                <div class="user-status">Admin</div>
                                                    <div class="user-name dropdown-indicator"><?php echo $_SESSION['namalengkap'];?></div>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1">

                                            <div class="dropdown-inner">
                                                <ul class="link-list">
                                                    <li><a class="dark-switch" href="#"><em class="icon ni ni-moon"></em><span>Dark Mode</span></a></li>
                                                </ul>
                                            </div>
                                            <div class="dropdown-inner">
                                                <ul class="link-list">
                                                    <li><a href="logout.php"><em class="icon ni ni-signout"></em><span>Keluar</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- .dropdown -->

                                    <!-- .dropdown -->
                                </ul>
                                <!-- .nk-quick-nav -->
                            </div>
                            <!-- .nk-header-tools -->
                        </div>
                        <!-- .nk-header-wrap -->
                    </div>
                    <!-- .container-fliud -->
                </div>
                <!-- main header @e -->
                <!-- content @s -->
                <div class="nk-content nk-content-fluid">
                    <div class="container-xl wide-lg">
                        <div class="nk-content-body">
                            <div class="components-preview wide-md mx-auto">
                                <div class="nk-block nk-block-lg">
                                    <div class="nk-block-head">
                                        <div class="nk-block-head-content">
                                            <h4 class="nk-block-title">Selamat Datang di <strong class="text-primary">Simple Contact System</strong></h4>
                                            <hr>
                                            <h4 class="nk-block-title">Information</h4>
                                            System Name : <strong class="text-primary">Simple Contact System</strong><br>
                                            Version     : <strong class="text-primary">V1.0</strong><br>
                                            Developer   : <strong class="text-primary">Wafa Rifqi Anafin</strong><br>
                                            Last Update : <strong class="text-primary">04/Feb/2021</strong><br>
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <!-- .card-preview -->
                                </div>
                                <!-- nk-block -->

                                <!-- nk-block -->
                            </div>
                            <!-- .components-preview -->
                        </div>
                    </div>
                </div>
                <!-- content @e -->
                <!-- footer @s -->
                <?php include 'footer.php';?>
                <!-- footer @e -->
            </div>
            <!-- wrap @e -->
        </div>
        <!-- main @e -->
    </div>
    <!-- app-root @e -->
    <!-- JavaScript -->
    <script src="assets/js/bundel.js?ver=1.0"></script>
    <script src="assets/js/skripjees.js?ver=1.0"></script>
</body>

</html>