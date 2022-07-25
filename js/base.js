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