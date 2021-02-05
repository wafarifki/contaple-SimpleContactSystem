<!DOCTYPE html>
<html lang="id" class="js">

<head>
    <meta charset="utf-8">
    <meta name="author" content="Wafa Rifki Anafin">
    <meta name="author-website" content="https://wafarifki.tk">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Masuk - Simple Contact System">
    <!-- Fav Icon  -->
    <link rel="shortcut icon" href="images/favicon.png">
    <!-- Page Title  -->
    <title>Silahkan Masuk | Simple Contact System</title>
    <!-- StyleSheets  -->
    <link rel="stylesheet" href="assets/css/sns.css?ver=1.0">
    <link id="skin-default" rel="stylesheet" href="assets/css/tema.css?ver=1.0">
</head>

<body class="nk-body bg-white npc-general pg-auth">
    <div class="nk-app-root">
        <!-- main @s -->
        <div class="nk-main bganimasi">
            <!-- wrap @s -->
            <div class="nk-wrap nk-wrap-nosidebar">
                <!-- content @s -->
                <div class="nk-content ">
                    <div class="nk-block nk-block-middle nk-auth-body  wide-xs">

                        <div class="card card-bordered">
                            <br>
                            <div class="brand-logo text-center">
                                <a href="login.php" class="logo-link">
                                    <img class="logo-light logo-img logo-img-lg" src="images/logo.png" srcset="images/logo2x.png 2x" alt="logo">
                                    <img class="logo-dark logo-img logo-img-lg" src="images/logo-dark.png" srcset="images/logo-dark2x.png 2x" alt="logo-dark">
                                </a>
                            </div>
                            <div class="card-inner card-inner-lg">
                                <div class="nk-block-head">
                                    <div class="nk-block-head-content">
                                        <div class="nk-block-des">
                                            <p>Selamat datang! Silahkan masuk untuk melanjutkan!</p>
                                        </div>
                                    </div>
                                </div><?php 
                                        if($_SERVER['REQUEST_METHOD']=='POST'){
                                        	$user	= $_POST['username'];
                                        	$pass	= $_POST['password'];
                                        	$p		= md5($pass);
                                        	if($user=='' || $pass==''){
                                        		?>
                                    <div class="example-alert">
                                        <div class="alert alert-danger alert-icon alert-dismissible">
                                            <em class="icon ni ni-cross-circle"></em> Silahkan lengkapi bidang yang dibutuhkan! <button class="close" data-dismiss="alert"></button>
                                        </div>
                                    </div>
                                    <br />
                                    <?php
                                        }else{
                                        	include "koneksi.php";
                                        	$sqlLogin = mysqli_query($konek, "SELECT * FROM admin WHERE username='$user' AND password='$p'");
                                        	$jml=mysqli_num_rows($sqlLogin);
                                        	$d=mysqli_fetch_array($sqlLogin);
                                        	if($jml > 0){
                                        		session_start();
                                        		$_SESSION['login']		= TRUE;
                                        		$_SESSION['idadmin']	= $d['idadmin'];
                                        		$_SESSION['username']	= $d['username'];
                                        		$_SESSION['namalengkap']= $d['namalengkap'];
                                        		
                                        		header('Location: index.php');
                                        	}else{
                                        	?>
                                    <div class="example-alert">
                                        <div class="alert alert-danger alert-icon alert-dismissible">
                                            <em class="icon ni ni-cross-circle"></em> Username dan Password Anda Salah! <button class="close" data-dismiss="alert"></button>
                                        </div>
                                    </div>
                                    <br />
                                    <?php
                                        }
                                        
                                        }
                                        }
                                        ?>
                                    <form method="post" action="" role="form">
                                    <div class="form-group">
                                            <div class="form-label-group">
                                                <label class="form-label" for="default-01">Nama Pengguna</label>
                                            </div>
                                            <input type="text" name="username" class="form-control form-control-lg" id="default-01" placeholder="Masukan Nama Pengguna" required>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-label-group">
                                                <label class="form-label" for="password">Kata Sandi</label>
                                            </div>
                                            <div class="form-control-wrap">
                                                <a href="#" class="form-icon form-icon-right passcode-switch" data-target="password">
                                                <em class="passcode-icon icon-show icon ni ni-eye"></em>
                                                <em class="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                                </a>
                                                <input type="password" class="form-control form-control-lg" name="password" id="password" placeholder="Masukan Kata Sandi" required>
                                            </div>
                                        </div>
                                    <div class="form-group">
                                        <button type="submit" name="submit" class="btn btn-lg btn-primary btn-block">Masuk&nbsp;<em class="icon ni ni-signin"></em></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- wrap @e -->
            </div>
            <!-- content @e -->
        </div>
        <!-- main @e -->
    </div>
    <!-- app-root @e -->
    <!-- JavaScript -->
    <script src="assets/js/bundel.js?ver=1.0"></script>
    <script src="assets/js/skripjees.js?ver=1.0"></script>

</html>