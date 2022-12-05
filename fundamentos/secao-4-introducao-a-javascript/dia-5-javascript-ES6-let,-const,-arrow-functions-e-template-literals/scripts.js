
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

const longestWord = string => {
  let arraySplit = string.split(' ');
  let majorWord = '';
  let result = '';

  for (const word of arraySplit) {   //Estudar mais for in e of
    if (word.length > majorWord) {
      majorWord = word.length;
      result = word;
    }
  }

  return result
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));


// 🚀-------------🚀 TESTES PLAYGROUND FUNCTIONS 🚀--------------🚀

// 1.Crie uma função usando o operador &&

const compareTrue = (boolean1, boolean2) => {
  if (boolean1 == true && boolean2 == true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(false, false));

// 2.Crie uma função que divida uma frase

const splitSentense = string => {
  const splitString = string.split(' ');
  return splitString;
}

console.log(splitSentense('vamo que vamo'));

// 3.Crie uma função que use concatenação de string

const concatName = (array) => {
  const firstName = array[0];
  const lastName = array[array.length - 1];
  let result = `${lastName}, ${firstName}`;
  return result;
}

console.log(concatName(['foguete', 'não', 'tem', 'ré',]));

// 4.Crie uma função que calcula a quantidade de pontos de um campeonato de futebol

const footballPoints = (victorys, ties) => {
  const victorysCalc = victorys * 3;
  const result = victorysCalc + ties;
  return `${result} pontos`;
}

console.log(footballPoints(14, 8));

// 5.Crie uma função que calcula o número de repetições do maior número

const higuestCount = (array) => {
  let higherNumber = 0;
  let repetitions = 0;
  
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];

    if (element > higherNumber) {
      higherNumber = element;
    }   
  }

  const arrayOrder = array.sort();
  for (const key in arrayOrder) {
    if (arrayOrder[key] === higherNumber) {
      repetitions += 1;
    }
  }

  return repetitions;
}

console.log(higuestCount([0,4,4,4,9,2,1,]));

// 6.Crie 3 funções para calcular as áreas de um triângulo e de um retângulo

const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRetangleArea = (base, height) => base * height;

const calcAllAreas = (base, height, form) => {
  let triangle = 0;
  let retangle = 0;

  if (form == 'triângulo') {
    triangle = calcTriangleArea(base, height);
    return `O valor da área do triângulo é de: ${triangle}`
  } else if (form == 'retângulo') {
    retangle = calcRetangleArea(base, height);
    return `O valor da area do retângulo é de: ${retangle}`
  } else {
    return 'Não foi possível fazer o calculo, insíra uma forma geométrica válida'
  }
}

console.log(calcAllAreas(10, 50, 'quadrado'));

// 7.Crie uma função de caça ao rato

const catAndMouse = (mouse, cat1, cat2) => {
  catOne = mouse - cat1;
  catTwo = mouse - cat2;

  if (catOne < catTwo) {
    return 'cat1';
  } else if (catTwo < catOne) {
    return 'cat2';
  } else if (catOne == catTwo) {
    return 'Os gatos trombam e o rato foge'
  }
}

console.log(catAndMouse(20, 8, 8));

// 8.Crie uma função FizzBuzz

const fizzBuzz = array => {
  let result = [];

  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];

    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push('fizzBuzz')
    } else if (array[index] % 3 === 0) {
      result.push('fizz')
    } else if (array[index] % 5 === 0) {
      result.push('buzz')
    } else if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      result.push('bug!')
    } 
  }

  return result;
}

console.log(fizzBuzz([9, 25,]));

// 9. Crie uma função que codifique e decodifique

const encode = (string) => {
  const arrayString = string.split('');
  let splitString = [];

  for (let index = 0; index < arrayString.length; index += 1) {
    const element = arrayString[index];

    if (element == 'a') {
      splitString.push(1);
    }
    else if (element == 'e') {
      splitString.push(2);
    }
    else if (element == 'i') {
      splitString.push(3);
    }
    else if (element == 'o') {
      splitString.push(4);
    }
    else if (element == 'u') {
      splitString.push(5);
    }
    else {
      splitString.push(element)
    }
  }
  let stringSplit = splitString.join('');

  return stringSplit;
}

console.log(encode('hello'));

/////////// TENTAR COM SWITCH CASE DEPOIS ///////////////

const decode = (string) => {
  const arrayString = string.split('');
  let splitString = [];

  for (let index = 0; index < arrayString.length; index += 1) {
    const element = arrayString[index];

    if (element == '1') {
      splitString.push('a');
    }
    else if (element == '2') {
      splitString.push('e');
    }
    else if (element == '3') {
      splitString.push('i');
    }
    else if (element == '4') {
      splitString.push('o');
    }
    else if (element == '5') {
      splitString.push('u');
    }
    else {
      splitString.push(element)
    }
  }
  let stringSplit = splitString.join('');

  return stringSplit;
}

console.log(decode('h3 th2r2!'));

// 10.Crie uma função de lista de tecnologias

const tecList = (array, string) => {
  const arrayOrder = array.sort();
  let result = [];

  for (let index = 0; index < arrayOrder.length; index++) {
    const element = arrayOrder[index];
    
    result.push({tech: element, name: string})
  }
  return result
}

console.log(tecList([], 'Vitor'));
// Obs: A função deve retornar um array vazio quando a lista de tecs estiver vazia. /não entendi se lista vazia seria um array vazio ou não passar o parâmetro ao chamar a função

// 11.Crie uma função de número de telefone

const generatePhoneNumber = array => {
  let dDD = [];
  let partOne = [];
  let partTwo = [];

  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];

    // <--- essa parte resolve o problema do numero mais repetido ------------->
    let num = {};

    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (num[element] === undefined) {
        num[element] = 1;
      } else {
        num[element] = num[element] + 1;
      }
    }

    let contRepetido = 0;
    let contNumero = 0;

    for (const key in num) {  
      if (contRepetido < num[key]) {
        contRepetido = num[key];
        contNumero = key
      }
    }

    if (contRepetido > 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    // <--- essa parte resolve o problema do numero mais repetido ------------->

    if (index > 11) {
      return 'Array com tamanho incorreto.';
    }
    else if (element < 0 || element > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    else if (index == 0 || index == 1) {
      dDD.push(element);
    }
    else if (index == 2 || index == 3 || index == 4 || index == 5 || index == 6) {
      partOne.push(element);
    }
    else if (index == 7 || index == 8 || index == 9 || index == 10) {
      partTwo.push(element);
    }
  }
  let joinDDD = dDD.join('');
  let joinPartOne = partOne.join('');
  let joinPartTwo = partTwo.join('');

  let result = `(${joinDDD}) ${joinPartOne}-${joinPartTwo}`;

  return result;
}

console.log(generatePhoneNumber([4, 1, 9, 9, 8, 2, 7, 1, 5, 6, 1,]));

// 12.Crie uma função que teste a condição de existência de um triângulo

const triangleCheck = (lineA, lineB, lineC) => {
  let isTriangle ;

  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    isTriangle = true;
  }
  else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    isTriangle = true;
  }
  else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    isTriangle = true;
  }
  else {
    isTriangle = false;
  }
  return isTriangle;
}

console.log(triangleCheck(10,14,8));

// 13.Crie a função boas vindas ao bar da Trybe

const hydrate = string => {
  const reg = string.replace(/[^0-9]/g,'');
  const numbers = parseInt(reg);

  let myFunc = num => Number(num);
  const arrayNumbers = Array.from(String(numbers), myFunc);

  let totalDeCopos = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    const element = arrayNumbers[index];
    totalDeCopos += element;
  }

  return `${totalDeCopos} copos de água`;
}


console.log(hydrate('5 cervejas'));
*/