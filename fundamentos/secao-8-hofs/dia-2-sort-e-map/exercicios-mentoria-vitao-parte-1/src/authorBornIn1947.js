const books = require('./books');
// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947;

const authorBornIn1947 = (data) => {
  return data.find((book) => (book.author.birthYear === 1947)).author.name
}

console.log(authorBornIn1947(books));
