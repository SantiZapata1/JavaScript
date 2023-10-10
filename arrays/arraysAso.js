//declaramos array asociativo parecido al formato json
let computadora = {

    nombre: "santiPC",
    procesador:"Intel core I5",
    ram: "16GB",
    espacio: "1TB",

};

//guardamos en variables cada atributo del objeto
let nombre = computadora["nombre"];
let procesador = computadora.procesador;
let ram = computadora["ram"];
let espacio = computadora["espacio"];

//imprimimos con backticks los datos del objeto
let frase = `nombre: ${nombre} <br>
            procesador: ${procesador} <br>
            ram: ${ram} <br>
            espacio: ${espacio}
            `
            



document.write(frase);