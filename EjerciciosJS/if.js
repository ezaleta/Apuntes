/* Ejercicio dias de la semana

let dia=1;

if (dia===0) {
    console.log("Es domingo")
}
else if (dia===1) {
    console.log("Es lunes")
}
else if (dia===2) {
    console.log("Es martes")
}
else if (dia===3) {
    console.log("Es miercoles")
}
else if (dia===4) {
    console.log("Es jueves")
}
else if (dia===5) {
    console.log("Es viernes")
}
else if (dia===6) {
    console.log("Es sabado")
}
else{
    console.log("Ese dia no existe")
} */

/* let hora=25;
if (hora<12 && hora>=5) {
    console.log("Buenos dias");
}
else if(hora>11 && hora<19){
    console.log("Buenas tardes");
}
else if(hora>=19 && hora<=23 || hora>=0 && hora<6 ){
    console.log("Buenas noches");
}
else{
    console.log("Hora invalida");
} */
/* Tarea: Checar si se puede pagar en efectivo.
Variable Efectivo
Variable Pago
Imprimir si puedo pagar o no o dato invalido  */

/* let efectivo = 20;
let pago = 20;

if (efectivo >= 0) {
    if (efectivo >= pago) {
        console.log("Se puede pagar");
    }
    else {
        console.log("No se puede pagar");
    } 
} else {
    console.log("Dato inválido");
    } */

/* let efectivo = 500;
let carritoDeCompras = 300;

if (efectivo > carritoDeCompras) 
    console.log("Puedes pagar");
else 
    console.log("Te falta dinero"); */
/* let eresAdulto = true; */
/* Scope */
let edad = 17;
if (edad >= 18) {
  let eresAdulto = true;
} else {
  let eresAdulto = false;
}
console.log(eresAdulto);
