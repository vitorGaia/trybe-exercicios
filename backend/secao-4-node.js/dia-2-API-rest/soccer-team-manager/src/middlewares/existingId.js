const teams = require('../utils/teams');

const existingId = (req, res, next) => {
  const { id } = req.params;
  const response = teams.some((team) => team.id === +id);

  if (!response) return res.status(400).json({ message: 'Time não encontrado' });

  next();
};

module.exports = existingId;