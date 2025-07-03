var kelas = document.getElementById("kelas");
var tbl =document.getElementById("tbl");
var konfirmasi=document.getElementById("konfirm");
var textkonfirmasi=document.getElementById("text-konfir");
var yes=document.getElementById("yes");
var no=document.getElementById("no");

/*tbl.style.display="none";*/
tbl.addEventListener("click",function(){
    kelas.style.visibility="hidden";
    tbl.style.visibility="hidden";
    if(kelas.value == "bahasa-inggris-kelas-X"){

        konfirmasi.style.display="block";
        textkonfirmasi.innerHTML="Anda memilih Bahasa Inggris kelas X. Apakah pilihan Anda sudah benar  ? ";
        yes.addEventListener("click",function(){
            window.location.href="opentest1.html";
            konfirmasi.style.display="none";
        })
        no.style.display="block";
        no.addEventListener("click",function(){
        kelas.style.visibility="visible";
        tbl.style.visibility="visible";
            konfirmasi.style.display="none";
        })
        }  
    else if(kelas.value == "bahasa-inggris-kelas-XI"){
        
        konfirmasi.style.display="block";
        textkonfirmasi.innerHTML="Anda memilih Bahasa Inggris kelas XI. Apakah pilihan Anda sudah benar  ? ";
        
        yes.addEventListener("click",function(){
            window.location.href="https://kompas.com/";
            konfirmasi.style.display="none";
        })
        no.style.display="block";
        no.addEventListener("click",function(){
        kelas.style.visibility="visible";
        tbl.style.visibility="visible";    
            konfirmasi.style.display="none";
        })
        }
    else if(kelas.value == "bahasa-inggris-kelas-XII"){
        
        konfirmasi.style.display="block";
        textkonfirmasi.innerHTML="Anda memilih Bahasa Inggris kelas XII. Apakah pilihan Anda sudah benar  ? ";
        
        yes.addEventListener("click",function(){
            window.location.href="https://yahoo.com/";
            
            konfirmasi.style.display="none";
        })
        no.style.display="block";
        no.addEventListener("click",function(){
        kelas.style.visibility="visible";
        tbl.style.visibility="visible";   
            konfirmasi.style.display="none";
        })
        }    
    else if(kelas.value == "informatika-kelas-X"){
        
        konfirmasi.style.display="block";
        textkonfirmasi.innerHTML="Anda memilih Informatika kelas X. Apakah pilihan Anda sudah benar  ? ";
        
        yes.addEventListener("click",function(){
            window.location.href="https://usu.ac.id/";
            
            konfirmasi.style.display="none";
        })
        no.style.display="block";
        no.addEventListener("click",function(){
        kelas.style.visibility="visible";
        tbl.style.visibility="visible";    
            konfirmasi.style.display="none";
        })
        }
    else if(kelas.value == "informatika-kelas-XI"){
        
        konfirmasi.style.display="block";
        textkonfirmasi.innerHTML="Anda memilih Informatika kelas XI. Apakah pilihan Anda sudah benar  ? ";
        
        yes.addEventListener("click",function(){
            window.location.href="https://unimed.ac.id/";
            
            konfirmasi.style.display="none";
        })
        no.style.display="block";
        no.addEventListener("click",function(){
        kelas.style.visibility="visible";
        tbl.style.visibility="visible";    
            konfirmasi.style.display="none";
        })
        }
    else if(kelas.value == "informatika-kelas-XII"){
        
        konfirmasi.style.display="block";
        textkonfirmasi.innerHTML="Anda memilih Informatika kelas XII. Apakah pilihan Anda sudah benar  ? ";
        
        yes.addEventListener("click",function(){
            window.location.href="https://ui.ac.id/";
            
            konfirmasi.style.display="none";
        })
        no.style.display="block";
        no.addEventListener("click",function(){
        kelas.style.visibility="visible";
        tbl.style.visibility="visible";    
            konfirmasi.style.display="none";
        })
        }
    else if(kelas.value == "x"){
        
        konfirmasi.style.display="block";
        textkonfirmasi.innerHTML="Anda belum memilih mata pelajaran dan kelas!";
        no.style.display="none";
        yes.addEventListener("click",function(){
        kelas.style.visibility="visible";
        tbl.style.visibility="visible";
            
            konfirmasi.style.display="none";
        })        

        }
    
  

})