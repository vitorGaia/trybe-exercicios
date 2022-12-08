/*
//Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerHTML = 'Primeiro filho do filho';

//Acesse o primeiroFilho a partir de pai.
const primeiroFilho = pai.firstElementChild;

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const textElement = elementoOndeVoceEsta.nextSibling;

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

//Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;
*/

const pai = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmãoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoElementoOndeVoceEsta = document.createElement('p');
filhoElementoOndeVoceEsta.innerText = 'Eu sou filho do elementoOndeVoceEsta!';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// isso não funcionou aqui mas funcionou acima
const primeiroFilhoDoFilho = document.getElementById('PrimeiroFilhoDoFilho');
const filhoDoPrimeiroFilhoDoFilho = document.createElement('p');
filhoDoPrimeiroFilhoDoFilho.innerHTML = 'Eu sou filho do primeiroFilhoDoFilho!';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);


const terceiroFilho = filhoDoPrimeiroFilhoDoFilho
  .parentElement // primeiroFilhoDoFilho
  .parentElement // elementoOndeVoceEsta
  .nextElementSibling; // terceiroFilho
console.log(terceiroFilho);


// isso tbm não funcionou
const paiDoPai = document.getElementById('paiDoPai');
const todosOsFilhos = paiDoPai.childNodes;

for (let index = todosOsFilhos.length - 1; index >= 0; index -= 1) {
  const filhoAtual = todosOsFilhos[index];

  if (filhoAtual.id == 'pai') {
    filhoAtual.removeChild(filhoAtual.firstElementChild)
  }
}