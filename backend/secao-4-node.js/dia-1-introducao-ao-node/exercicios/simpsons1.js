const simpsons = require('./simpsons.json');

const idNome = simpsons.forEach((personagem) => console.log(`${personagem.id} - ${personagem.name}`));

console.log(idNome);