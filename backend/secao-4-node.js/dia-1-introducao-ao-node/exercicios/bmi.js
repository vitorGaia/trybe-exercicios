const { questionFloat } = require('readline-sync');

const peso = questionFloat('Qual o seu peso? ');
const alturaEmCm = questionFloat('Qual a sua altura? ');

const imc = (peso, altura) => {
  console.log(`Peso: ${peso}kg, Altura: ${altura}cm`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = peso / alturaAoQuadrado;

  return imc;
};

const main = () => {
  const imcResult = imc(peso, alturaEmCm);
  let situacao = '';

  if (imcResult <= 18.5) situacao = 'Abaixo do peso';
  if (imcResult > 18.5 && imcResult <= 24.9) situacao = 'Peso normal';
  if (imcResult > 25 && imcResult <= 29.9) situacao = 'Acima do peso';
  if (imcResult > 30 && imcResult <= 34.9) situacao = 'Obesidade grau 1';
  if (imcResult > 35 && imcResult <= 39.9) situacao = 'Obesidade grau 2';
  if (imcResult >= 40) situacao = 'Obesidade grau 3 ou 4';

  console.log(`Seu IMC é: ${imcResult.toFixed(2)}`);
  console.log(`Sua situação é: ${situacao}`);
};

main();
