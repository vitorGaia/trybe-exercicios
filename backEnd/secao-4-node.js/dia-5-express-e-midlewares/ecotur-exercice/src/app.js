const express = require('express');
const {
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
} = require('../src/middlewares');

const app = express();

app.use(express.json());

app.post(
  '/activities',
  validateDifficulty,
  validateRating,
  validateCreatedAt,
  validateDescription,
  validatePrice,
  validateName,
  (_req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});

module.exports = app;