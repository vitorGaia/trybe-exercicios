const fs = require('fs').promises;

const filtraSimpsons10e6 = async () => {
  const conteudoDoArquivo = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(conteudoDoArquivo);

  const novoArray = simpsons
  .filter((person) => person.id !== '6' && person.id !== '10');

  await fs.writeFile('./simpsons.json', JSON.stringify(novoArray));
};

const main = async () => {
  await filtraSimpsons10e6();
}

main();