
//diferentes formas de crear arrays
let miArray = [1, 2, 3, "cuatro", true];
let miArrayConstructor = new Array(1, 2, 3, "cuatro", true);

// console.log(miArray[3]);
// console.log(miArrayConstructor[4]);

// existen diferentes metodos para la manipulacion de arrays

//se puede recorrer un arreglo a con for a traves de sus indices o usando forEach
// for (let i = 0; i < miArray.length; i++) {
//     console.log(miArray[i]);
// }
console.log(" ");

//for in devuelve la posicion de cada elemento del array
for(elemento in miArray){
  console.log(elemento);
}
console.log(" ");

//for of devuelve el valor de cada indice del array
for(elemento of miArray){
  console.log(elemento);
}

console.log(" ");

// miArray.forEach(function(miArray, indice) {
//     console.log("Índice " + indice + ": " + miArray)
// });