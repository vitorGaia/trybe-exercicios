const books = require('./books');

// Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
const arrayStrings = () => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)

// Crie um array com strings no formato NOME_DA_PESSOA_AUTORA - DATA DE NASCIMENTO
const formatedAuthorNamesBirth = () => books.map((book) => (`${book.author.name} - ${book.author.birthYear}`));

// Construa um array de objetos a partir do array de livros.
const nameAndAge = () =>  books.map((book) => {
  const age = book.releaseYear - book.author.birthYear;
  return {
    author: book.author.name,
    age: age,
  }
}).sort((a, b) => (a.age - b.age))
