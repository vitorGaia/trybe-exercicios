const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'LAU LAU LAU');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
};

main();