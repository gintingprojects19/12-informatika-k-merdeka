var pilih = document.getElementById("pilih");
var pass = document.getElementById("pass");
var kirim = document.getElementById("kirim");
var form = document.getElementById("form");
var bd = document.getElementById("body");
var form1 =document.getElementById("form1");

/*var lanjut =document.getElementById("lanjut";)*/
kirim.addEventListener("click",function(){
    if(pilih.value=="Kelas X A" && pass.value==123456){
        /*window.location.href="c.html"; pindah halaman*/
        form.style.display="none";
        bd.style.paddingTop="0px";
        form1.style.display="block";
        
    }
    else if(pilih.value=="Kelas XI A" && pass.value==1234567){
        document.write("ini halaman kelas XI A");
    }
    else if(pilih.value=="x" && pass.value==""){
        alert('Kelas / password belum dipilih dan diisi');
    }
    else if(pilih.value=="Kelas XII A"){
        alert('System ini sedang diperbaiki oleh guru anda. silakan konfirmasi ke guru anda');
    }
    else{
        alert('password yang anda masukkan salah');
        pass.style.backgroundColor="red";
        pass.style.color="white";
    }
})