const express = require('express');
const {
  getAllChocolates,
  getChocolateForId,
  getBrandForId,
  getChocolateByName,
  attChocolateById,
} = require('./cacauTrybe');

const app = express();
app.use(express.json()); // serve pro app aprender a usar o body nas requisições.

app.get('/chocolates', async (_req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await getChocolateByName(name);
  res.status(chocolates.length === 0 ? 404 : 200).json(chocolates);
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolateForId = await getChocolateForId(id);
  if (!chocolateForId) res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json(chocolateForId);
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const brandForId = await getBrandForId(brandId);
  res.status(200).json(brandForId);
});

app.put('/chocolates/id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const updateChocolate = await attChocolateById(+id, { name, brandId });

  if (updateChocolate) return res.status(200).json({ chocolate: updateChocolate });
  res.status(404).json({ message: 'chocolate not found' });
});

module.exports = app;