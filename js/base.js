function workclick() {
    var work = document.getElementById("worknav");
    work.classList.add("link-active");

    var contact = document.getElementById("contnav");
    if(contact.classList.length===2)
        contact.classList.remove("link-active");
        
    var home = document.getElementById("arundhati");
    if(home.classList.length===2)
        home.classList.remove("link-active");
}

function contactclick() {
    var contact = document.getElementById("contnav");
    contact.classList.add("link-active");

    var work = document.getElementById("worknav");
    if(work.classList.length===2)
        work.classList.remove("link-active");

    var home = document.getElementById("arundhati");
    if(home.classList.length===2)
        home.classList.remove("link-active");
}

function homeclick() {
    var work = document.getElementById("worknav");
    if(work.classList.length===2)
        work.classList.remove("link-active");

    var contact = document.getElementById("contnav");
    if(contact.classList.length===2)
        contact.classList.remove("link-active");
}


;(function(){
          function id(v){ return document.getElementById(v); }
          function loadbar() {
            var ovrl = id("overlay"),
                prog = id("progress"),
                stat = id("progstat"),
                img = document.images,
                c = 0,
                tot = img.length;
            if(tot == 0) return doneLoading();

            function imgLoaded(){
              c += 1;
              var perc = ((100/tot*c) << 0) +"%";
              prog.style.width = perc;
              stat.innerHTML = "LOADING "+ perc;
              if(c===tot) return doneLoading();
            }
            function doneLoading(){
              ovrl.style.opacity = 0;
              setTimeout(function(){ 
                ovrl.style.display = "none";
              }, 1200);
            }
            for(var i=0; i<tot; i++) {
              var tImg     = new Image();
              tImg.onload  = imgLoaded;
              tImg.onerror = imgLoaded;
              tImg.src     = img[i].src;
            }    
          }
          document.addEventListener('DOMContentLoaded', loadbar, false);
        }());