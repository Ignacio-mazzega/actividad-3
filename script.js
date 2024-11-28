let nombre = 'Ignacio';
const edad = 25;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);

let suma =  2 + 5;
console.log(`La suma es ${suma}`);

if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

if (nombre == 'Ignacio') {
    console.log(`Hola ${nombre}, bienvenido!`);
} else {
    console.log(`Tu no eres Ignacio, tu eres ${nombre}`);
}

if (suma > 9 && suma < 100) {
    console.log('El resultado de la suma es un número de dos cifras');
} else {
    console.log('El resultado de la suma es de una cifra o más de dos cifras');
}
