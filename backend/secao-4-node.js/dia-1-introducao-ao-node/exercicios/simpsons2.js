const fs = require('fs').promises;

const personPorId = async (id) => {
  const promise = new Promise((resolve, reject) => {
    const busca = simpsons.find((person) => person.id === id);

    if (!busca) reject(new Error('Id não encontrado!'))

    resolve(busca.name);
  });
  return promise;
};

personPorId('3')
  .then(result => console.log(`Sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));