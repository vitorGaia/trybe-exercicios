const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();
app.use(express.json()); // serve pro app aprender a usar o body nas requisições.

app.get('/chocolates', async (_req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();

  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();

  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;

  const chocolateForId = await cacauTrybe.getChocolateForId(id);

  if (!chocolateForId) res.status(404).json({ message: 'Chocolate not found' });

  res.status(200).json(chocolateForId);
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { id } = req.params;

  const brandForId = await cacauTrybe.getBrandForId(id);

  res.status(200).json(brandForId);
});

module.exports = app;