const fs = require('fs').promises;

const familiaSimpsons = async () => {
  const conteudoDoArquivo = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(conteudoDoArquivo);

  const familiaIds = [1, 2, 3, 4, 5];

  const familia = simpsons
    .filter((simpson) => familiaIds.includes(+simpson.id));

  await fs.writeFile('./simpsons.json', JSON.stringify(familia));
}

const main = async () => {
  await familiaSimpsons();
}

main();