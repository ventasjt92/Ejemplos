document.getElementById("myForm").addEventListener("submit", registrar);


//Esta funcion registra los clientes
function registrar(e) {
    var registro = {
            nombre: document.getElementById("nombreCliente").value
            , correo: document.getElementById("correoCliente").value
            , hbt: document.getElementById("hbt").value
        }
        //si no hay nada guardado en el localstorage significa que es la primera vez que se ingresa algo
    if (localStorage.getItem("datos") === null) {
        //creamos el array donde guardaremos los objetos
        var data = [];
        //le agregamos el elmeneto nuevo
        data.push(registro);
        //lo guardamos en el local transformandolo a string
        localStorage.setItem("datos", JSON.stringify(data));
    }
    else {
        // si ya hay contenido en el localstorage creamos una variable donde guardaremos los objetos que estan en el local storage
        //usamos json parse para transformarlo en objeto porq localstorage solo guarda string
        var data2 = JSON.parse(localStorage.getItem("datos"));
        //ahora que lo tenemos en data debemos agregar el nuevo registro al final y volverlo a guardar
        data2.push(registro);
        localStorage.setItem("datos", JSON.stringify(data2));
    }
    //limpiamos el form
    document.getElementById("myForm").reset();
    //y mostramos la lista
    mostrar();
    e.preventDefault();
}



//Esta funcion muestra en pantalla los cliente
function mostrar() {
    //primero los obtenemos como objeto recuerda que se guardan como string
    var data = JSON.parse(localStorage.getItem("datos"));
    //obtenemos el div donde lo mostraremos
    var lista = document.getElementById("lista");
    //limpiamos el div imprimiendole espacio en blanco por si tiene otra cosa
    lista.innerHTML="";
    for (var i = 0; i < data.length; i++) {
        var nombre = data[i].nombre;
        var correo = data[i].correo;
        var hbt = data[i].hbt;
        lista.innerHTML += "<div class='bs-callout bs-callout-default'>Cliente: " + nombre + "<br>Habitacion Nro: " + hbt + "<br><a onclick='mostrarCorreo(\""+correo+"\")' class='btn btn-default'>Ver Correo</a>&nbsp;<a onclick='eliminar(\""+nombre+"\")' class='btn btn-danger'>Eliminar</a></div>";
    }
}
//Esta funcion muestra el correo
function mostrarCorreo(correo){
    
    alert(correo);
}

//esta funcion elimina el cliente
function eliminar(cliente){
    
    var data = JSON.parse(localStorage.getItem("datos"));
    for(var i=0; i<data.length; i++){
        if(cliente == data[i].nombre){
            //borramos del data
            data.splice(i, 1);
        }
    }
    localStorage.setItem("datos", JSON.stringify(data));
    //luego mostramos la lista de nuevo
    mostrar();
    
}















