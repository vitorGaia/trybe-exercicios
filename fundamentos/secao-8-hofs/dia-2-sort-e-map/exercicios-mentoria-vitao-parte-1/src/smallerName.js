const books = require('./books');
// retorne o o livro com menor nome

const smallerName = (data) => {
  let array = books[0].name;
  data.forEach((book) => {
    if (book.name.length < array.length) {
      array = book.name
    }
  })
  return array
};

console.log(smallerName(books));