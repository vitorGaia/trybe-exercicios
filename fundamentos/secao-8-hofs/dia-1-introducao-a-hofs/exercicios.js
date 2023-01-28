const newEmail = (nome, sobrenome) => {
  return `${nome}_${sobrenome}@trybe.com`
};
// ========================================================================

const employeeGenerator = (fullname) => {
  const email = fullname.toLowerCase().replace(' ', '_');
  // const email = fullname.toLowerCase().split(' ').join('_');
  return {fullname, email: `${email}@trybe.com`}
}
// console.log(employeeGenerator('vitor gaia'));

const newEmployees = () => {
  const employees = {
    id1: employeeGenerator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeeGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeeGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
// console.log(newEmployees());

// ========================================================================

// Sorteador de loteria
const sorteio = (numero) => {
  const number = Math.floor((Math.random() * 5) + 1)
  if (number === numero) {
    return 'Parabéns, você ganhou!'
  } else {
    return 'Tente novamente'
  }
}
// console.log(sorteio(2));

// ========================================================================

// Corretor automático de exame
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// esta função fara a comparação dos indexs retornando a pontuação para cada combinação
const answersCompare = (solucao, resposta) => {
  if (solucao === resposta) {
    return 1;
  } if (resposta === 'N.A') {
    return 0;
  }
  return -0.5;
}
// esta função recebe os dois arrays e a função de comparação como param e faz a cpntagem e retorno dos pontos
const countPoints = (solucoes, respostas, compare) => {
  let cont = 0;
  for (let index = 0; index < solucoes.length; index += 1) {
    const contReturn = compare(solucoes[index], respostas[index])
    cont += contReturn;
  }
  return `Resultado final: ${cont} pontos`;
}

// console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, answersCompare));

// 🚀======================================================================
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const authorBornIn1947 = () => books.find((book) => (book.author.birthYear === 1947))

// Retorne o nome do livro com menor número de caracteres (menor nome).
const smallerName = () => {
  let nameBook; // namebook começa como falso pq esta vazio
  
  const livros = books.forEach((book) => { // se name namebook true faça algo ...
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

// Encontre o primeiro livro cujo nome possua 26 caracteres.
const getNamedBook = () => {
  // escreva seu código aqui
  return books.reduce((atual, proximo) => (atual.name.length > proximo.name.length ? atual : proximo));
}

// Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
const everyoneWasBornOnSecXX = () => {
  return books.every((book) => (book.author.birthYear > 1900 && book.author.birthYear < 2000))
}

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => (book.releaseYear > 1980 && book.releaseYear < 1990))
}

// Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.
const authorUnique = () => {
  let verify;
  books.forEach((book) => {
    books.forEach((book2) => {
      if (book.author.birthYear === book2.author.birthYear) {
        verify = true;
      } else {
        verify = false;
      }
    })
  })
  return verify;
}

console.log(authorUnique());