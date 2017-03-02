"use strict";
//Seccion de "eventos.html"
function neutral() {
    var div = document.getElementById("1954");
    div.classList.remove("color_rojo", "color_verde");
    div.classList.add("neutral");
}

function color_verde() {
    var div = document.getElementById("1954");
    div.classList.remove("neutral", "color_rojo");
    div.classList.add("color_verde");
}

function color_rojo() {
    var div = document.getElementById("1954");
    div.classList.remove("neutral", "color_verde");
    div.classList.add("color_rojo");
}
var cont = 0;
function cuenta_clicks() {
    cont++;
    console.log("Hizo click");
    console.log(cont);
}
document.getElementById("1951").addEventListener("mouseover", neutral);
document.getElementById("1951").addEventListener("click", cuenta_clicks);
document.getElementById("1952").addEventListener("click", color_verde);
document.getElementById("1953").addEventListener("click", color_rojo);







