const fs = require('fs').promises;
const { join } = require('path');
const { response } = require('./app');
const { log } = require('console');

const PATH = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, PATH), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacauTrybeFile = async (content) => {
  try {
    const completePath = join(__dirname, PATH);
    await fs.writeFile(completePath, JSON.stringify(content));
  } catch (e) {
    console.error('Erro ao salvar o arquivo', e.message);
    return null;
  }
};

const getAllChocolates = async () => {
  const response = await readCacauTrybeFile();
  return response.chocolates;
};

const getChocolateForId = async (id) => {
  const { chocolates } = await readCacauTrybeFile();
  return chocolates.find((chocolate) => chocolate.id === +id);
};

const getBrandForId = async (id) => {
  const { chocolates } = await readCacauTrybeFile();
  return chocolates.filter((chocolate) => chocolate.brandId === +id);
};

const getChocolateByName = async (name) => {
  const { chocolates } = await readCacauTrybeFile();
  return chocolates.filter((chocolate) => (
    chocolate.name.toLowerCase().includes(name.toLowerCase())
  ));
}

const attChocolateById = async (id, update) => {
  const { chocolates } = await readCacauTrybeFile();
  const chocolate = chocolates.find((chocolate) => chocolate.id === +id);

  if (chocolate) {
    chocolates.map((chocolate) => {
      if (chocolate.id === id) return { ...chocolate, ...update };
      return chocolate;
    })
    await writeCacauTrybeFile(chocolates);
    return { ...chocolate, ...update };
  }

  return false;
};

/* console.log(getChocolateByName('Mo').then((res) => console.log(res))); */

module.exports = {
  getAllChocolates,
  getChocolateForId,
  getBrandForId,
  getChocolateByName,
  attChocolateById,
}