const express = require('express');
require('express-async-errors');
const { validateTeam, existingId, apiCredentials } = require('./middlewares/index');
const teams = require('./utils/teams');

const app = express();
app.use(express.json());
app.use(apiCredentials);

let nextId = 3;

app.get('/teams', (_req, res) => res.status(200).json({ teams }));

app.get('teams/:id', existingId, (req, res) => {
  const { id } = req.params;
  const team = teams.find((t) => t.id === +id);
  res.json(team);
});

app.post('/teams', validateTeam, (req, res) => {
  if (
    !req.teams.teams.includes(req.body.sigla)
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) return res.status(422).json({ message: 'Já existe um time com essa sigla' });

  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = +req.params.id;
  const team = teams.find((t) => t.id === +id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

module.exports = app;