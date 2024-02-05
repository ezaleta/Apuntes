//Operadores aritmeticos
console.log(typeof (1 + 2 + 3));
console.log(typeof (1 + 2 + "3" + 4 + 5 + 6)); //3315
console.log("1" + 4 + 2 + 3);
console.log("1" + 5 + (2 + 3)); //155
console.log("1" + 6 + (2 + 4) + (5 + "7")); //16657
console.log(true + "1"); //true1
console.log(false + 3 + "4" + false + (8 + 9)); //  false34false17
console.log(typeof (false + 1)); //1
console.log(true * 8); // "true=1"
console.log("hola" * 2);
console.log("mundo" - 2);
console.log(true - "mundo");
console.log(NaN + true);
console.log(null + true);
console.log(null + null);
console.log(null * null);
console.log(null + "hola");
console.log(null + 4);
console.log(null + 0);

//Operaciones relacionales - Nos permiten comparar >,<,>=,<=,==,===,!=(diferente),!==(superdiferente)
console.log(8 > 9);
console.log(8 >= 9);
console.log(9 >= 8);
console.log(7 < 7);
console.log(7 <= 7);

//Ejercicios con == (Compara valores)
console.log(7 == 7);
console.log(7 == "7");
console.log(0 == false);

//Ejercicios con === (Compara valores y tipo de datos)
console.log(7 === "7");
console.log(0 === false);
