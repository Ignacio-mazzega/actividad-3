// Primeras prácticas en Javascript Clase 1
// Crea una variable nombre con tu nombre y úsala para imprimir un mensaje.

let nombre = "Ignacio";
const edad = 25;

console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);

let suma = 10 + 5;

console.log(`La suma es de ${suma}`);

if (edad >= 18) {
    console.log(`Tiene ${edad} y es mayor de edad`);
} else {
    console.log(`Tiene ${edad} y es menor de edad`);
}

// Declara y suma dos números, muestra el resultado en consola.

let numero1 = 20;
let numero2 = 35;
let suma2 = numero1 + numero2;
console.log(`La suma es de ${suma2}`);

// Usa operadores lógicos para evaluar si 10 > 5 y 5 < 2.

let mayorQue = 10 > 5;
let menorQue = 5 < 2;
console.log(`10 > 5 nos muestra que es ${mayorQue}`);

// Declara variables con let y const y nota las diferencias al intentar cambiarlas.

let puedoCambiarlas = "Chau";
const noPuedoCambiarlas = "Hola";

// Declara una variable de tipo boolean y úsala en una operación lógica.

let booleano = true;

let puedeVotar = booleano && true;

console.log(puedeVotar);

// Imprime el tipo de dato de una variable usando typeof.

console.log(typeof(edad));
console.log(typeof(nombre));

// Declara un array y muestra uno de sus elementos en la consola.

let arreglo = ["Manzana", "Pera", "Limón", "Uva"];
console.log(arreglo[0]);

// Usa una operación con % para encontrar el resto de 17 ÷ 3.

let resto = 17 % 3;
console.log(`El resto de 17 % 3 es: ${resto}`);

// Declara una variable sin valor e imprime su valor inicial.

let sinValor;
console.log(sinValor);

// Escribe un programa que verifique si un número es positivo o negativo.
// Por consola

let number = 10;
if (number > 0) {
    console.log(`El número ${number} es positivo.`);
} else if (number < 0) {
    console.log(`El número ${number} es negativo.`);
} else {
    console.log(`Es el número ${number}`);
}

/*
let numerin = parseFloat(prompt(`Ingrese un número :)`));
if (numerin > 0) {
    alert(`El número ${numerin} es positivo.`);
} else if (numerin < 0) {
    alert(`El número ${numerin} es negativo.`);
} else {
    alert(`Es el número ${numerin}`);
}
*/

// Usa switch para imprimir el día de la semana según un número del 1 al 7.
/*
let diaDeLaSemana = parseFloat(prompt(`Ingrese un número del 1 al 7 y le diré que día es.`));
switch (diaDeLaSemana) {
    case 1:
        alert("Es día Lunes");
        break;
    case 2:
        alert("Es día Martes");
        break;
    case 3:
        alert("Es día Miércoles");
        break;
    case 4:
        alert("Es día Jueves");
        break;
    case 5:
        alert("Es día Viernes");
        break;
    case 6:
        alert("Es día Sábado");
        break
    case 7:
        alert("Es día Domingo");
        break;                
    default:
        alert("El número ingresado no es correcto");
        break;
} */

// Haz un bucle for que imprima los números del 1 al 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
    
}

// Crea un programa que calcule el factorial de un número usando while.
/*
let numerazo = parseInt(prompt("Ingrese un número: "));

let factorial = 1;
let i = numerazo;

while (i > 1) {

    factorial *= i;
    i--;
    
}

console.log(`El factorial de ${numerazo} es ${factorial}`); */

// Escribe un condicional que determine si una persona puede votar según su edad.
/*
let edadPersona = parseFloat(prompt(`Ingrese su edad: `));

if (edadPersona >= 16) {
    alert(`Usted tiene ${edadPersona} años y puede votar`);
} else {
    alert(`Usted tiene ${edadPersona} años y NO puede votar`);
}
    */

// Imprime los números pares entre 1 y 20 con un bucle for.

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    } 
    
}

// Usa switch para imprimir un mensaje dependiendo de la calificación (A, B, C, D, F).
/*
let calificacion = prompt("Ingrese su calificación: ");

switch (calificacion) {
    case "A":
        alert("Su calificación es excelente");
        break;
    case "B":
        alert("Su calificación es muy buena");
        break;
    case "C":
        alert("Su calificación es regular");
        break;
    case "D":
        alert("Su calificación es desaprobado");
        break;
    case "F":
        alert("Su calificación es insuficiente");
        break;
    default:
        alert("La calificación es incorrecta");
        break;
}
        */

// Haz un programa que pida dos números y los sume si ambos son positivos.
/*
let num1 = parseFloat(prompt("Dime un número"));
let num2 = parseFloat(prompt("Dime otro número"));

if (num1 > 0 && num2 > 0) {
    resultado = num1 + num2;
    alert(`El resultado es ${resultado}`);
} else {
    alert(`Hubo un error, ambos números deben ser positivos`);
}
    */

// Escribe un bucle while que cuente de 10 a 1 en orden descendente.

let im = 10;
while (im <= 10 && im > 0) {
    console.log(im);
    im--;
}

