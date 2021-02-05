<?php

    if (isset($_POST['submit'])) {
        if ($_POST['nama'] == "" || $_POST['email'] == "" || $_POST['pesan'] == "") {
            echo "<script>alert('Gagal Dikirim, Pastikan formulir terisi dengan benar');location='index.php';</script>";
        } else {
           
            include 'Dashboard/koneksi.php';
            $nama = mysqli_real_escape_string($konek, $_POST['nama']);
            $email = mysqli_real_escape_string($konek, $_POST['email']);
            $pesan = mysqli_real_escape_string($konek, $_POST['pesan']);
            $sql = "INSERT INTO kontak(nama,email,pesan) values('$nama', '$email', '$pesan')";
            $result = mysqli_query($konek, $sql);
            echo "<script>alert('Berhasil Dirikim, Terimakasih Kak');location='index.php';</script>";
        }
    }
    ?>
<!DOCTYPE html>
<html lang="id" class="js">
<head>
    <meta charset="utf-8">
    <meta name="author" content="Wafa Rifki Anafin">
    <meta name="author-website" content="https://wafarifki.tk">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Hubungi Kami - Simple Contact System">
    <!-- Fav Icon  -->
    <link rel="shortcut icon" href="Dashboard/images/favicon.png">
    <!-- Page Title  -->
    <title>Hubungi Kami | Simple Contact System</title>
    <!-- StyleSheets  -->
    <link rel="stylesheet" href="Dashboard/assets/css/sns.css?ver=1.0">
    <link id="skin-default" rel="stylesheet" href="Dashboard/assets/css/tema.css?ver=1.0">
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
                                <a href="index.php" class="logo-link">
                                    <img class="logo-light logo-img logo-img-lg" src="Dashboard/images/logo.png" srcset="Dashboard/images/logo2x.png 2x" alt="logo">
                                    <img class="logo-dark logo-img logo-img-lg" src="Dashboard/images/logo-dark.png" srcset="Dashboard/images/logo-dark2x.png 2x" alt="logo-dark">
                                </a>
                            </div>
                            <br>
                            <div class="card-inner card-inner-sm">
                                <div class="nk-block-head">
                                    <div class="nk-block-head-content">
                                        <div class="nk-block-des">
                                            <p>Kami ingin mendengar dari Anda! Masukan Anda sangat berharga dan akan memungkinkan kami untuk melayani kebutuhan Anda di masa yang akan datang</p>
                                        </div>
                                    </div>
                                </div>
                                <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" role="form">
                                        <div class="form-group">
                                            <div class="form-label-group">
                                                <label class="form-label" for="default-01">Nama Lengkap</label>
                                            </div>
                                            <input type="text" name="nama" class="form-control form-control-lg" id="default-01" placeholder="Masukan Nama Lengkap" required>
                                        </div>

                                        <div class="form-group">
                                            <div class="form-label-group">
                                                <label class="form-label" for="default-01">Alamat Email</label>
                                            </div>
                                            <input type="email" name="email" class="form-control form-control-lg" id="default-01" placeholder="Masukan Alamat Email" required>
                                        </div>

                                        <div class="form-group">
                                            <div class="form-label-group">
                                                <label class="form-label" for="default-01">Isi Pesan</label>
                                            </div>
                                            <textarea placeholder="Masukan Isi Pesan" name="pesan" class="form-control form-control-lg" id="default-01"  required> </textarea>
                                        </div>
                                        
                                    <div class="form-group">
                                        <button type="submit" name="submit" class="btn btn-lg btn-primary btn-block">Hubungi Kami&nbsp;<em class="icon ni ni-send-alt"></em></button>
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
    <script src="Dashboard/assets/js/bundel.js?ver=1.0"></script>
    <script src="Dashboard/assets/js/skripjees.js?ver=1.0"></script>

</html>