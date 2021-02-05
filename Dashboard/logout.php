<?php
session_start();
session_destroy();

//kembali ke halaman login.php
header('location:login.php');
?>