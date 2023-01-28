/* // Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione seu código aqui

const idadeOrder = people.sort((a, b) => (a.age - b.age))
console.log(idadeOrder);

const newObject = products.map((product) => {
  prices.map((price) => {
    const object = {};
    object.product = price;
    return object;
  })
})
console.log(newObject); */
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);