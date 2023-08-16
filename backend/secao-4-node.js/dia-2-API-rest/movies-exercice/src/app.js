const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const movies = require('./movies.json');

const app = express();
app.use(express.json());

// Crie um endpoint do tipo GET com a rota /movies/search, que possa listar todos os filmes do JSON.
app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await fs.readFile();

    if (!q) res.status(200).end();

    const filteredMovies = movies.filter((el) => el.movie.includes(q));

    res.status(200).json(filteredMovies);
  } catch ({ message }) {
    res.status(500).send({ message })
  }
});

// Crie uma função de leitura do JSON com o modulo fs.
const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

// Crie um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.
app.get('/movies/:id', (req, res) => {
  const { id } = req.params;

  const movie = movies.find((movie) => movie.id === +id);

  if (!movie) res.status(404).json({ message: 'Movie not found!' });

  res.status(200).json({ movie });
});

//Crie um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.
app.get('/movies', (_req, res) => res.status(200).json({ movies }));

// Crie um endpoint do tipo POST com a rota /movies, para cadastrar um novo filme no JSON.
app.post('/movies', (req, res) => {
  const newTeam = { ...req.body };
  movies.push(newTeam);

  res.status(201).json({ newTeam });
});

// Crie um endpoint do tipo PUT com a rota /movies/:id, que possa editar informações de um filme do JSON.
app.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;

  const updateMovie = movies.find((movie) => movie.id === +id);

  if (!updateMovie) res.status(404).json({ message: 'Movie not found!' });

  updateMovie.movie = movie;
  updateMovie.price = price;
  res.status(200).json({ updateMovie });
});

// Crie um endpoint do tipo DELETE com a rota /movies/:id que possa deletar um filme do JSON.
app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = fs.readFile();
  const filteredMovies = movies.filter((movie) => movie.id !== +id);
  const updatedMovies = JSON.stringify(filteredMovies, null, 2);
  await fs.writeFile(moviesPath, updatedMovies);

  res.status(204).end();
}); // este exercício está crashando, levar para mentoria

module.exports = app;