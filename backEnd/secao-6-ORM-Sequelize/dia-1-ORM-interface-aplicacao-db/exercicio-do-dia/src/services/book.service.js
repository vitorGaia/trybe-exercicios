const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getByID = async (bookId) => {
  const book = await Book.findByPk(bookId);
  return book;
};

const createBook = async (bookObj) => {
  const response = await Book.create(bookObj);
  return response;
};

const updateBook = async (bookId, bookObj) => {
  const [updateBook] = await Book.update(bookObj, { where: { id: bookId } });
  console.log(updateBook);
  return updateBook;
};

const removeBook = async (bookId) => {
  const response = Book.destroy({ where: { id: bookId } });
  console.log(response);
  return response;
};

module.exports = {
  getAll,
  getByID,
  createBook,
  updateBook,
  removeBook,
};