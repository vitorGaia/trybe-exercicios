const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const response = await BookService.getByID(id);

  if (!response) return res.status(404).json({ "message": "Book not found" });

  res.status(200).json(response);
};

const createBook = async (req, res) => {
  const response = await BookService.createBook(req.body);
  res.status(201).json(response);
};

const updateBook = async (req, res) => {
  const response = await BookService.updateBook(req.params.id, req.body);

  if (!response) return res.status(404).json({ "message": "Book not found" });

  res.status(201).json({ "message": "Book updated" });
};

const removeBook = async (req, res) => {
  const response = await BookService.removeBook(req.params.id);

  if (!response) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book removed' });
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  removeBook,
};