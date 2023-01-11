// Adicione à página o título "Paleta de Cores".

const body = document.getElementsByTagName('body');
const elementH1 = document.createElement('h1');
elementH1.id = 'title';
elementH1.innerHTML = 'Paleta de Cores';
document.body.appendChild(elementH1);

//Adicione à página uma paleta contendo quatro cores distintas.

const r = Math.random() * 225;

console.log(body);
