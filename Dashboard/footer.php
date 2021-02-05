<div class="nk-footer">
    <div class="container-fluid">
        <div class="nk-footer-wrap">
            <div class="nk-footer-copyright">
                &copy; 2021 Simple Contact System. Designed & Development By
                <a href="https://wafarifki.tk" target="_blank">Wafa Rifqi Anafin</a>
            </div>
            <div class="nk-footer-links">
                <ul class="nav nav-sm">
                    <li class="nav-item">
                        <a class="nav-link" id="waktu"></a>
                    </li>
                    <!--
                        <li class="nav-item">
                            <a class="nav-link" href="#">Privacy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Help</a>
                        </li>-->
                </ul>
            </div>
            <script>
                document.getElementById("waktu").innerHTML = formatAMPM();
                
                function formatAMPM() {
                var d = new Date(),
                minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
                hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
                ampm = d.getHours() >= 12 ? 'PM' : 'AM',
                months = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'],
                days = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
                return days[d.getDay()]+', '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
                }
            </script>
        </div>
    </div>
</div>