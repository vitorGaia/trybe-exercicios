/* const { expect } = require('chai'); */
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} = require('sequelize-test-helpers');
const { Book } = require('../../../src/models');

/* describe('O model de Book', function () {
  it('Possui as propriedades corretas', async function () {
    const book = new Book();
    expect(book).to.have.property('title');
    expect(book).to.have.property('author');
    expect(book).to.have.property('pageQuantity');
    expect(book).to.have.property('publisher');
  })
}) */

describe('O model de Book', () => {
  const Book = Book(sequelize, dataTypes);
  const book = new Book();

  describe ('possui o nome "Book"', () => {
    checkModelName(Book)('Book');
  })

  describe('possui as propriedades "title", "author", "pageQuantity" e "publisher"', () => {
    ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
  });
})