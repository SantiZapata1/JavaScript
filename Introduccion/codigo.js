//variables (const, var y let)

/* en js las variables son dinamicas, es decir que el programa modifica el tipo de dato de kla variable segun el contenido que almacena. Las const son constantes, y la diferencia entre var y let es su alcance, las var son de alcance de funcion y las let de bloques, tambien varian en su tipo de hoisting (si pueden o no ser usadas antes de declararse)*/

const constante = 8;

let numero = 10;
let nombre = "santiago";
let booleano = false;
//let undefined;
let varNull = null;

// operadores de asignacion
numero %= 6;
//console.log("resto: "+numero);

//funcion para concaternar
document.write(nombre.concat(" frase concatenada con concat"));
//contatenar usando backticks (se puede poner codigo HTML)
document.write(`<h3> hola  ${nombre}, usando backticks <h3>`);

//funcion de la api de java que permite emitir un bloque de mensaje con respuesta, retorna nuestra respuesta
// let nombrePrompt=prompt("dime tu nombre");
// alert("hola "+nombrePrompt);

//condicionales
let edad = prompt("ingrese su edad");
if (edad>=18) {
    alert("obligatoriamente debes votar");
}else if(edad>=16 && edad <18){
    alert("opcionalmente puede votar");
}else {
    alert("no puede votar porque es menor de edad");
}

 