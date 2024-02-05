//Tipos de datos
/* 
Datos primitivos
-string            wstring char
-number            int dint float real
-undefined       
-booleano
-null
-bigint()
-symbol(nuevo tipo de datos)
-NaN Not a number

Datos compuestos
-objetos
-funciones
*/

/* Variables */
let nombre = "Edgar";
var apellido = "Gonzalez";
let alert = "Hola Mundo";
let nombreCompleto = "Edgar Gonzalez Zaleta";
let edad = 29;
let datos = ["Edgar", 29, true, undefined, null];
let mascotas = ["perro", "gato", "pez", ["perico", "caballo", "gallina"]];
let persona = {
  nombre: "Fulanito",
  edad: 20,
  amigos: ["Mengano", "Perengano", "Sutano"],
};

console.log("Hola mi nombre es " + nombreCompleto + " y mi edad es " + edad);
console.log('Hola mi "nombre" es ' + nombreCompleto + " y mi edad es " + edad);
//Template string
console.log(`Hola mi "nombre" es ${nombreCompleto} y mi 'edad' es ${edad}`);
/* alert(nombre); */
console.log(datos[1]);
//array multidimensional
console.log(mascotas[3][1]);
//Objeto
console.log(persona.amigos[0]);
