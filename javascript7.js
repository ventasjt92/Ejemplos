document.getElementById("1951").addEventListener("click", animar);
var cont = 0;

var titulo = document.getElementById("1952");

function animar() {
    titulo.classList.remove("animated", "bounce");
    titulo.classList.remove("animated", "bounceIn");
    
    
    if (cont === 0) {
        titulo.classList.add("animated", "bounce");
        cont = 1;
        return;
    }
    
    if (cont === 1){
        titulo.classList.add("animated", "bounceIn");
        cont=0;
    }
    
    
    
    
}