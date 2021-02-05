<?php
//variabel koneksi
$konek = mysqli_connect("localhost","root","","contactform");

if(!$konek){
	echo "Koneksi Ke Database Gagal, Silahkan coba lagi!";
}

function namaBulan($angka){
	switch ($angka) {
		case '1':
			$bulan = "Januari";
			break;
		case '2':
			$bulan = "Februari";
			break;
		case '3':
			$bulan = "Maret";
			break;
		case '4':
			$bulan = "April";
			break;
		case '5':
			$bulan = "Mei";
			break;
		case '6':
			$bulan = "Juni";
			break;
		case '7':
			$bulan = "Juli";
			break;
		case '8':
			$bulan = "Agustus";
			break;
		case '9':
			$bulan = "September";
		case '10':
			$bulan = "Oktober";
			break;
		case '11':
			$bulan = "November";
			break;
		case '12':
			$bulan = "Desember";
			break;
		default:
			$bulan = "Tidak ada bulan yang dipilih...";
			break;
	}

	return $bulan;
}



function tglIndonesia($tgllahir){
	$tanggal = substr($tgllahir,8,2);
	$bulan = namaBulan(substr($tgllahir,5,2));
	$tahun = substr($tgllahir,0,4);
	return $tanggal.' '.$bulan.' '.$tahun;		 
}

?>