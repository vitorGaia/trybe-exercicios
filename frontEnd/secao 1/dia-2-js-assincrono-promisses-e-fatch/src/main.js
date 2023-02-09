/* const img = document.getElementById('image');
const name = document.getElementById('name');
const btn = document.getElementById('btn');

const ACESS_TOLKEN = '2407473869401059';
const BASE_URL = `https://superheroapi.com/api/${ACESS_TOLKEN}`;
const MAX_HEROES = 1000;

const randomNumber = () => Math.floor(Math.random() * MAX_HEROES);
const randomId = randomNumber();

const fetchTest = fetch(BASE_URL).then((response) => response.json());

console.log(fetchTest); */

// tentando fazer o exercício com outra API pois a do course bugou
const img = document.getElementById('image');
const name = document.getElementById('name');
const btn = document.getElementById('btn');

const BASE_URL = 'https://random-d.uk/api';

console.log(fetch(BASE_URL).then((response) => response.json()));
