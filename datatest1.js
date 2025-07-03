
var backinfo=document.getElementById("backinfo");
var tblinfo=document.getElementById("tbl-info");
var konfirmasi=document.getElementById("konfirm-pass");
var utamainfo=document.getElementById("infoutama");
var vs=document.getElementById("vs");
var vscls=document.getElementById("vs-cls");
/*var ttp =document.getElementById("ttp");*/
var popup=document.getElementById("pop-up");
var sidemenu=document.getElementById("sidemenu");
var open=document.getElementById("open");
var cls=document.getElementById("close");
var menures=document.getElementById("menu-res");

var beranda=document.getElementById("beranda");
var brd=document.getElementById("brd");
var keluar=document.getElementById("kl");
var lp=document.getElementById("lp");
var pm=document.getElementById("pm");
var ppbm=document.getElementById("ppbm");
var nama=document.getElementById("nama");
var pass=document.getElementById("pass");
var masuk=document.getElementById("masuk");
var test=document.getElementById("test");
var login=document.getElementById("login");
var siswa=document.getElementById("siswa");
var video=document.getElementById("vid");
var cpm=document.getElementById("cpm");
var vpm=document.getElementById("vpm");
var capaian=document.getElementById("capaian");
var idsiswa=document.getElementById("id-siswa");
var clickmenu=document.getElementById("click-menu");
/*log in*/
backinfo.addEventListener("click",function(){
    utamainfo.style.display="none";
})
tblinfo.addEventListener("click",function(){
    utamainfo.style.display="block";
})
vs.addEventListener("click", function(){
    video.style.position="absolute";
    video.style.left="5%";
    video.style.top="0";
    vs.style.display="none";
    vscls.style.display="block";
    
})
vscls.addEventListener("click",function(){
    vs.style.display="block";
    vscls.style.display="none";
    video.style.position="static";
    
})
masuk.addEventListener("click",function(){

    if(pass.value=="123"&&nama.value!==""){
       test.style.display="block";
        login.style.display="none";
        siswa.innerHTML=nama.value;
        siswa.style.textTransform="uppercase";
        /*menures.style.display="block";*/
        
        
       }
    /*belum ada coding jika user belum isi nama lengkap*/
    else{
        konfirmasi.style.display="block";
        konfirmasi.style.fontSize="8pt";
        
        
        
    }
})

/*content-setelah :login*/


vpm.addEventListener("click",function(){
    video.style.display="block";
    /*vpm.style.backgroundColor="white";*/
    vpm.style.color="white";
    capaian.style.display="none";
    cpm.style.backgroundColor="darkblue";
    cpm.style.color="white";
    ppbm.style.display="none";
    beranda.style.display="none";
    sidemenu.style.marginRight="-500px";
    clickmenu.style.display="block";
    
})
cpm.addEventListener("click",function(){
    video.style.display="none";
    /*cpm.style.backgroundColor="white";*/
    cpm.style.color="white";
    beranda.style.display="none";
    vpm.style.backgroundColor="darkblue";
    vpm.style.color="white";
    capaian.style.display="block";
    ppbm.style.display="none";
    sidemenu.style.marginRight="-500px";
    clickmenu.style.display="block";
    
})
pm.addEventListener("click",function(){
    video.style.display="none";
    capaian.style.display="none";
    beranda.style.display="none";
    ppbm.style.display="block";
    idsiswa.innerHTML=nama.value;
    idsiswa.style.textTransform="uppercase";
        sidemenu.style.marginRight="-500px";
    clickmenu.style.display="none";

    /*sidemenu.style.marginRight="-400px";*/
    
    
})
lp.addEventListener("click",function(){
    video.style.display="none";
    capaian.style.display="none";
    capaian.style.display="none";
    beranda.style.display="block";
    ppbm.style.display="none";
    clickmenu.style.display="block";
   sidemenu.style.marginRight="-500px";
    
})
keluar.addEventListener("click",function(){
    window.location.reload();
})
brd.addEventListener("click",function(){
    beranda.style.display="block";
    video.style.display="none";
    capaian.style.display="none";
    sidemenu.style.marginRight="-500px";
    clickmenu.style.display="block";
})
clickmenu.addEventListener("click",function(){
    sidemenu.style.marginRight="0";
    clickmenu.style.display="none";
})
ttp.addEventListener("click",function(){
    sidemenu.style.marginRight="-500px";
    clickmenu.style.display="block";
})
ttp.addEventListener("mouseover",function(){
    popup.style.display="block";
})
ttp.addEventListener("mouseout",function(){
    popup.style.display="none";
})