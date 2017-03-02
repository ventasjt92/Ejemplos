// Seccion de JSON JavaScript Object Notation
var objeto_persona = {
    nombre: "Jesus",
    edad: 19,
    presentarse: function() {
    console.log("Hola mi nombre es "+this.nombre+" y mi edad es "+this.edad);
    },
    getNombre: function() {
        return this.nombre;
    },
    setNombre: function(nombre){
        this.nombre=nombre;
    }
};

objeto_persona.presentarse();
console.log(objeto_persona.getNombre());
objeto_persona.setNombre("Alberto");
console.log(objeto_persona.getNombre());