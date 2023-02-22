/* var express = require('express');
var cors = require('cors');
var app = express();
 
var whitelist = ['http://localhost:5173/', 'http://example2.com']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
 
app.get('/products/:id', cors(corsOptionsDelegate), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
}) */

// =====================================================================
import '../style.css';

const img = document.getElementById('image');
const name = document.getElementById('name');
const btn = document.getElementById('sbmt-button');

const ACESS_TOLKEN = '2407473869401059';
const BASE_URL = `https://superheroapi.com/api/${ACESS_TOLKEN}`;
const MAX_HEROES = 1000;

const randomNumber = () => Math.floor(Math.random() * MAX_HEROES);
const randomId = randomNumber();

const fetchTest = fetch('https://superheroapi.com/api.php/2407473869401059/27')
.then((response) => response.json())
.then((data) => console.log(data));


/* const eventBtn = () => btn.addEventListener('click', (event) => {
  event.preventDefault()

  fetch(`${BASE_URL}/${randomId}/image`)
  .then((response) => response.json())
  .then((data) => {
    img.setAttribute('src', data.url)
  })

  fetch(`${BASE_URL}/${randomId}/name`)
  .then((response) => response.json())
  .then((data) => {
    name.innerHTML = data.name
  })
  .catch((error) => console.log('Erro ao fazer requisição', error.message));
})

eventBtn(); */

// tentando fazer o exercício com outra API pois a do course bugou
/* const img = document.getElementById('image');
const name = document.getElementById('name');
const btn = document.getElementById('btn');

const BASE_URL = 'https://random-d.uk/api';

console.log(fetch(BASE_URL).then((response) => response.json()));
 */