const fs = require('fs').promises;
const { join } = require('path');
const { response } = require('./app');
const { log } = require('console');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const response = await readCacauTrybeFile();
  return response.chocolates;
};

const getChocolateForId = async (id) => {
  const { chocolates } = await readCacauTrybeFile();
  const response = chocolates.find((chocolate) => chocolate.id === +id);
  return response;
};

const getBrandForId = async (id) => {
  const { chocolates } = await readCacauTrybeFile();
  const response = chocolates.filter((chocolate) => chocolate.brandId === +id);
  return response;
};

module.exports = {
  getAllChocolates,
  getChocolateForId,
  getBrandForId,
}