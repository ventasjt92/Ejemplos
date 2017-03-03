document.getElementById("1951").addEventListener("click",crear);

function crear() {
    var input = document.createElement("input");
    input.setAttribute("type","email");
    input.setAttribute("placeholder","correo");
    console.log(input);
    //inserta el input al final de body
    document.getElementById("body").appendChild(input);
    
    var div = document.createElement("div");
    div.setAttribute("id","alert");
    div.innerHTML = "Se agrego un nuevo campo de correo";
    //inserta el div antes del primer hijo before
    var body = document.getElementById("body");
    body.insertBefore(div,body.firstChild);
    
}