let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var cont = 0;
var intervalo;

function intervalo() {
    intervalo = setInterval("imprimir()", 1000);
}

function detener_intervalo() {
    clearInterval(intervalo);
}

function timeout() {
    setTimeout("doblar(arreglo)", 3000);
}

function doblar(numeros) {
    for (i in numeros) {
        numeros[i] = numeros[i] * 2;
    }
    console.log("Los numeros doblados son: " + numeros);
}

function imprimir() {
    console.log("Contador: " + cont);
    cont++;
}
document.getElementById("boton").addEventListener("click", intervalo);
document.getElementById("boton3").addEventListener("click", detener_intervalo);
document.getElementById("boton2").addEventListener("click", timeout);