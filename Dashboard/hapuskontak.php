<?php 
    ob_start();
    session_start();
    if(!isset($_SESSION['login'])){
    header('location:login.php');
    }
    include "koneksi.php";
    ?>
<?php

echo "<script>alert('Sistem Dalam Mode DEMO');location='kontak.php';</script>";
    
//if (isset($_GET['id'])) {
//$id = $_GET['id'];

//$query = "DELETE FROM kontak WHERE id='$_GET[id]'";
//$data = $konek->prepare($query);
        
//if ($data->execute()) {
//    echo "<script>alert('Data Kontak Berhasil Dihapus');location='kontak.php';</script>";
//} else {
//    echo "<script>alert('Ups Terjadi Sebuah Kesalahan');location='kontak.php';</script>";
//   }
//} else {
//    echo "<script>alert('Ups Terjadi Sebuah Kesalahan');location='kontak.php';</script>";
//}

?>