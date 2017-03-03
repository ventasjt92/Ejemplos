// asi se define una clase
class Alumno {
    //este es el constructor de la clase
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido= apellido;
    }
    //este es un metodo
    nombre_completo(){
        return this.nombre+" "+this.apellido;
    }
}
//asi creo una instancia de la clase es decir creo un objeto de la clase alumno
var jesus = new Alumno("JESUS","TORRES");
console.log(jesus.nombre_completo());