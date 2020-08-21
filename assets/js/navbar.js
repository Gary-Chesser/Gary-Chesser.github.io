function closeNav() {
    document.getElementById("header").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("footer").style.marginLeft= "0";
}
function openNav(){
    document.getElementById("header").style.width = "375px";
    document.getElementById("main").style.marginLeft= "375px";
    document.getElementById("footer").style.marginLeft= "375px";
}