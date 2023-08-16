const { question, questionInt } = require('readline-sync');

const name = question('Qual o seu nome? ');
const age = questionInt('Qual a sua idade? ');

console.log(`Hello ${name}! You are ${age} years old!`);
