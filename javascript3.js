var cont = 9;



function cambiar_numero() {
    if(cont > 0){
        document.getElementById("boton").value = cont;
        cont--;
    }
    else{
        document.getElementById("boton").value = "CERO";
    }
}

document.getElementById("boton").addEventListener("click",cambiar_numero);


