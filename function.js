const myImage = document.getElementById("myImage");
const thisImage = document.getElementById("thisImage");
const on = document.getElementById("on");
const off = document.getElementById("off");

off.onclick = function(){
    myImage.style.display = "none";
    thisImage.style.display = "block";
}

on.onclick = function(){
    myImage.style.display = "block";
    thisImage.style.display = "none";
}