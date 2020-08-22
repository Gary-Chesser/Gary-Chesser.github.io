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
function hide(i){
    var x;
    switch(i){
        case 1:
            x = document.getElementById("pay");
            break;
        case 2:
            x = document.getElementById("account");
            break;
        case 3:
            x = document.getElementById("movie");
            break;
        case 4:
            x = document.getElementById("calc");
            break;
        default:
            break;
    }
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}