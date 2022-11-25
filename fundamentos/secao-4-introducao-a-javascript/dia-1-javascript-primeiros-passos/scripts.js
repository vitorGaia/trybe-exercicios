/*//Usar Ctrol + S para salvar o código sempre antes de executar

// operadores lógicos 🚀

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

// Operador or 🚀

let weekDay = 'domingo';

if (weekDay == 'segunda' || weekDay == 'terça' || weekDay == 'quarta' || weekDay == 'quinta' || weekDay == 'sexta') {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
}
else if (weekDay == 'sábado' || weekDay == 'domingo') {
    console.log('FINALMENTE, descanso merecido UwU');
}

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

// Switch e case 🚀

let process = 'aprovada';

switch (process) {
    case 'aprovada':
        console.log('Parabéns, você foi aprovada(o)!');
        break;

    case 'lista':
        console.log('Você está na nossa lista de espera');
        break;

    case 'reprovada':
        console.log('Você foi reprovada(o)');
        break;
    
    default:
        console.log('Informação incorreta');
}

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

let peca = 'Dama';

switch (peca.toLowerCase()) {
    case 'rei':
        peca = 'Pode ser movimentado em qualquer direção do tabuleiro, mas apenas de casa em casa.';
        break

    case 'dama':
        console.log('Sem restrições, a Rainha tem livre movimentação no jogo na horizontal, vertical e diagonais.');
        break

    case 'bispo':
        console.log('Sem restrição de número de casas, mas somente no sentido diagonal.');
        break

    case 'cavalo':
        console.log('Realiza movimentos em “L”, ou seja, duas casas em um sentido e uma casa em sentido perpendicular àquele, em qualquer direção.');
        break

    case 'torre':
        console.log('pode correr sem restrição de número de casas e em todas as direções (frente, trás, direita, esquerda).');
        break

    case 'peão':
        console.log('Pode apenas realizar movimentos frontais, de forma que o primeiro movimento de cada peão abranja até duas casas, e os demais se limitam a uma casa à frente. O ataque do peão sempre ocorre na diagonal.');
        break

    default:
        console.log('Não é uma peça');
}


// if/else 5.0
let nota = 55%;

if (nota >= 90){
    console.log('A');
}
else if (nota >= 80){
    console.log('B');
}
else if (nota >= 70){
    console.log('C');
}
else if (nota >= 60){
    console.log('D');
}
else if (nota >= 50){
    console.log('E');
}
else if (nota < 50){
    console.log('F');
} else if (nota < 0 || nota > 100){
    console.log('Error');
}


const num1 = 10;
const num2 = 55;
const num3 = 43;
let trueOrFalse;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    trueOrFalse = true;
} else {
    trueOrFalse =  false;
}
console.log(trueOrFalse);

/////////////////////////////////

const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
    const totalCostOfProduct = costOfProduct * 1.2;
    const totalProfit = (saleValue - totalCostOfProduct) * 1000;
    console.log (totalProfit);
} else {
    console.log('Error, os valores não podem ser negativo');
}
*/

//Academia de lógica exercício 1

let idadeMarina = 10;
let idadeSilvia = 18;
let idadeIza = 15;

if (idadeMarina < idadeSilvia && idadeMarina < idadeIza) {
    console.log ('Marina é a pessoa mais jovem e possui ' + idadeMarina + ' anos de idade');
} else if (idadeSilvia < idadeMarina && idadeSilvia < idadeIza) {
    console.log ('Silvia é a pessoa mais jovem e possui ' + idadeSilvia + ' anos de idade');
} else if (idadeIza < idadeMarina && idadeIza < idadeSilvia) {
    console.log ('Iza é a pessoa mais jovem e possui ' + idadeIza + ' anos de idade');
}

//Academia de lógica exercício 2

let age = 24;
let sex = 'm';
let weight = 67;
let height = 1.83;

if (sex === 'm') {
    let taxaMetBasalM = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5;
    console.log ('A taxa metabólica basal é: ' + taxaMetBasalM + ' Kcal');
}
else if (sex === 'w') {
    let taxaMetBasalW = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161;
    console.log ('A taxa metabólica basal é: ' + taxaMetBasalW + ' Kcal');
}