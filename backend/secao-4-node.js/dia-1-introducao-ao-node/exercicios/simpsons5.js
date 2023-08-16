const simpsons = require('./simpsons.json');
const fs = require('fs').promises;

const addNelson = async () => {
  const addNelson = [
    ...simpsons,
    { id: '11', name: 'Nelson Muntz' },
  ]
  await fs.writeFile('./simpsons.json', JSON.stringify(addNelson));
};

addNelson();