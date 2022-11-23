/*//Usar Ctrol + S para salvar o código sempre antes de executar

// if/else course 🚀

const nota = 55;

if (nota >= 80) {
    console.log('parabéns, você foi aprovado');
} else if (nota < 80 && nota >= 60) {
    console.log('você esta na nossa lista de espera');
} else {
    console.log('você foi reprovado');
}

// Área e perímetro de um retângulo de base 5 e altura 8 🚀

const base = 5;
const heigth = 8;
const area = base * heigth;
const perimeter = area;

console.log(perimeter);

// Operadores aritméticos 🚀

const a = 3;
const b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// if/else 1.0 🚀

if (a > b) {
    console.log('a maior que b');
} else {
    console.log('b maior que a');
}

// if/else 2.0 🚀

const x = 10;
const y = 50;
const z = 20;

if (x > y && x > z) {
    console.log('x maior que y e z');
} else if (y > x && y > z) {
    console.log('y maior que x e z');
} else if (z > x && z > y) {
    console.log('z maior que x e y');
}

// if/else 3.0 🚀

let numero = -15;

if (numero > 0) {
    console.log('numero positivo');
} else if (numero < 0) {
    console.log('numero negativo');
} else if (numero = 0) {
    console.log('zero');
}

// if/else 4.0 🚀

const a = 100;
const b = 40;
const c = -40.5;
let eTriangulo = a + b + c;

if (eTriangulo == 180) {
    console.log('true');
} else if (eTriangulo !== 180) {
    console.log('false');
} else {
    console.log('erro');
}
*/

// operadores lógicos

const currentHour = 4;
let messege = '';

if (currentHour > 22) {
    messege = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
    messege = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
    messege = 'Vamos fazer um bolo pro café da tarde';
} else if (currentHour > 11 && currentHour < 14) {
    messege = 'Hora do almoço!!!';
} else if (currentHour > 4 && currentHour < 11) {
    messege = 'Hmmm, cheiro de café recém-passado';
} else {
    messege = 'Ta dormindo'
}
console.log(messege);
