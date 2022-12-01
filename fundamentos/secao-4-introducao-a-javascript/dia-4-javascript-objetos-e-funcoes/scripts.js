/*
// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {golden: 2, silver: 3},
};

// Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

// Adicione ao objeto a chave bestInTheWorld, usando a sintaxe meuObjeto.chave = valor, e atribua a essa chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes: ' + player['bestInTheWorld']);

// Acesse a chave medals, usando a sintaxe meuObjeto.chave, e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

// Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (const key in names) {
    console.log('Olá ' + names[key]);
}

// Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (const key in car) {
    console.log(key + ': ' + car[key]);
}

// Faça cinco programas, um para cada operação aritmética básica.

function adicao (a, b) {
    return a + b;
}

function subtracao (a, b) {
    return a - b;
}

function multiplicacao (a, b) {
    return a * b;
}

function divisao (a, b) {
    return a / b;
}

function modulo (a, b) {
    return a % b;
}

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function biggestNumber (a, b) {
    if (a > b) {
        return console.log('O primeiro número é maior');
    } else if (a < b) {
        return console.log('O segundo número é maior');
    }
}

biggestNumber(20, 10);

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function biggestNumber (a, b, c) {
    if (a > b && a > c) {
        return console.log('O primeiro número é maior');
    } else if (b > a && b > c) {
        return console.log('O segundo número é maior');
    } else if (c > a && c > b) {
        return console.log('O terceiro número é maior');
    }
}

biggestNumber(20, 10, 21);

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.



// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem-vinda, ' + info.personagem);

// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console.

info['recorrente'] = 'Sim';
console.log(info);

// Faça um for/in que mostre todas as chaves do objeto.

for (const key in info) {
    console.log(key);
}

// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

for (const key in info) {
    console.log(info[key]);
}

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves.

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (let key in info) {
    if (
        key === 'recorrente' &&
        info[key] === 'Sim' &&
        info2[key] === 'Sim'
    ) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[key] + ' e ' + info2[key]);
    }
}

// Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

// Adicione um novo livro favorito na chave livrosFavoritos, que é um array.

leitor['livrosFavoritos'].push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
    })

console.log(leitor.livrosFavoritos);

// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');

// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

let word = 'crocodilo';
let arrayWord = [];
let arrayWordReverse = [];

for (let index = 0; index < word.length; index += 1) {
    arrayWord.push(word[index]);
}

arrayWordReverse = arrayWord.reverse();

if (arrayWord === arrayWordReverse) {
    console.log('É palíndromo!!');
} else {
    console.log('Não é palíndromo!!');
}

//////////

function verificaPalindrome (string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
        return true;
    } else {
        return false;
    }
}

//////////

function verificaPalindrome2 (word) {
    for (index in word) {
        if (word[index] != word[(word.length - 1) - index]) {
            return false
        }
    }
    return true;
}

console.log(verificaPalindrome2('desenvolvimento'));
*/
// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indexOfMajor(array) {
    let indexOfMajor = array[0];

    for (let index in array) {
        if (indexOfMajor < array[index]) {
            indexOfMajor = index;
        }
    }
    return indexOfMajor;
}

console.log(indexOfMajor([2, 3, 6, 7, 10, 1]));