// Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
const flatten = () => arrays.reduce((acumulador, array) => (acumulador.concat(array)), [])

// Crie uma string com os nomes de todas as pessoas autoras.
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
const reduceNames = () => books.reduce((acumulador, book, index) => {
  if (index === books.length - 1) {
    return `${acumulador}${book.author.name}.`
  } else {
    return `${acumulador}${book.author.name}, `
  }
}, '')

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const averageAge = () => books.reduce((acumulador, book) => (acumulador + book.releaseYear - book.author.birthYear), 0) / books.length

// Encontre o livro com o maior nome.
const longestNamedBook = () => books.reduce((acumulador, book) => (book.name.length > acumulador.length ? book : acumulador))

console.log(longestNamedBook());