const express = require('express');
const {
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  validateAuth,
} = require('../src/middlewares');
const generateToken = require('./utils/generateToken');

const app = express();

app.use(express.json());

app.post(
  '/activities',
  validateAuth,
  validateDifficulty,
  validateRating,
  validateCreatedAt,
  validateDescription,
  validatePrice,
  validateName,
  (_req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ "message": "Campos ausentes!" });
  };

  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = app;