
/*const mensaje = "Mensaje de texto, 'comprobando comillas'"
const complemento = "conectando caracteres"*/

//console.log(mensaje)

//console.log(mensaje.length) // legth es una propiedad para medir la cantidad de caracteres en una cadenas

//console.log(mensaje.concat('tremendo')) //concant() es un metodo para unir dos o mas cadenas de texto.

//console.log(mensaje + complemento) // otra forma de conectar cadenas de texto

//console.log(`${mensaje} ${complemento}`) // otra forma de conectar cadenas de texto usando template literals (backticks) y expresiones ${} para insertar variables o resultados de operaciones dentro de la cadena.

/*const arreglo1 = [1, 2, 3,4,5,6,7,8,9,10];

console.log(arreglo1);

const arreglo2 = new Array(1,2,3,4,5,6);
console.log(arreglo2);*/

/*const Persona = {
    nombre: "Gilberto",
    apellido: "Meneses",
    edad: 22,
    Usuario: {
        username: "GILBERT",
        correo: "gilbert0123@gmail.com",
        password: "1234hdhd"
    },
    pais: "Venezuela"
}

Object.freeze(Persona)


console.table(Persona)
console.log(Object.isFrozen(Persona))*/

"user strict";

const Estudiante={
    nombre: "Gilberto",
    apellido: "Meneses",
    grado: "5to año"
}

Object.seal(Estudiante)
Estudiante.nombre = "Gerardo"

console.table(Estudiante)
console.log(Object.isSealed(Estudiante))
