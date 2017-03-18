Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

document.getElementById("1951").addEventListener("click", crear);
var cont=1;

function crear() {
    //creamos el elemento input y se le agregan atributos
    var input = document.createElement("input");
    input.setAttribute("type", "email");
    input.setAttribute("placeholder", "correo");
    //Obtenemos el body del DOM y le insertamos el nuevo input que creamos
    document.getElementById("body").insertBefore(input, document.getElementById("1951"));
    console.log(cont);
    
    if (cont === 1) {
        //creamos el elemento div y lo insertamos al final del body
        var div = document.createElement("div");
        div.setAttribute("id","alert"+cont);
        div.innerHTML = "Se agrego un nuevo campo de correo";
        document.getElementById("body").appendChild(div);
    }
    else{
        var div = document.createElement("div");
        div.setAttribute("id","alert"+cont);
        div.innerHTML = "Se agregaron "+cont+" nuevos campos de correo";
        document.getElementById("body").appendChild(div);
        document.getElementById("alert"+(cont-1)).remove();
    }
    cont=cont + 1;
}