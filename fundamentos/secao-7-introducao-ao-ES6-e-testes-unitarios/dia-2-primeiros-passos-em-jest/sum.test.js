const { default: test } = require("node:test");

const sum = (a, b) => a + b;
test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

const multiplicacao = (a, b) => a * b;
test('Multiplica dois valores', () => {
  expect(multiplicacao(2, 3)).toEqual(6);
});