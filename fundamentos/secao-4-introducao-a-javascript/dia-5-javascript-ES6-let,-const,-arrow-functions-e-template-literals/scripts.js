
/*
// 🚀 Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.

function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade()

// 🚀 Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;

const pessoa = {
  nome: 'Henri',
  idade: 20
}

pessoa.nome = 'Luna';
pessoa.idade = 19;
console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

// 🚀 Modifique a variável para que não ocorra Erro;

let favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood);

// 🚀 Modifique as concatenações para template literals.

const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${name} ${lastName}!`);
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a, b)}`);

// 🚀 Modifique a estrutura das funções a seguir para que elas sejam arrow functions;
// 🚀 Transforme a função numeroAleatorio em uma arrow function;

const numeroAleatorio = () => Math.random()
console.log(numeroAleatorio());

// 🚀 Transforme a função hello em uma arrow function;

const hello = (nome) => `Olá, ${nome}!`
console.log(hello('Vitor'));

// 🚀 Transforme a função nomeCompleto em uma arrow function;

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
let nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));

// 🚀 Altere a expressão if/else utilizando ternary operator;

let speed = 90;
const speedCar = (speed) => speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
console.log(speedCar(speed));
*/
// Crie uma função que ligue e desligue um motor de um carro.

const statusMotor = false;

const ligarDesligar = () => statusMotor == true ? `O motor está ligado` : `O motor está desligado`;

console.log(ligarDesligar());

// 🚀 Crie uma função que calcule a área de um círculo.

const circleArea = (raio) => {
  const pi = 3.14;
  let area = pi * (raio ** 2);
  return area;
}

console.log(circleArea(5));

// 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

const longestWord = (string) => {
  let wordMajor = [];
  for (const key in string.split(' ')) {
    if (key.length > wordMajor) {
      console.log(wordMajor);
    }
  }
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));