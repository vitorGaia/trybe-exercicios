/* import { nanoid } from 'nanoid';
import './style.css';
import { copy } from 'clipboard-copy';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
    const randomPassword = nanoid();
    displayPasswordEl.innerHTML = randomPassword;
});

displayPasswordEl.addEventListener('click', (event) => {
    copy(event.target.innerHTML);
    alert('Senha copiada!');
});

// Vamos importar nossa biblioteca
import validator from 'validator';

// Aqui, vamos selecionar, pelos ids, os campos em nossa página
const campoDeTexto = document.querySelector('#value');
const button = document.getElementById('btn');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');

button.addEventListener('click', (event) => {
    // Vamos usar o preventDefault() para evitar que, ao
    // clicar no botão, ele recarregue a página
    event.preventDefault();

    // Aqui, criamos um objeto cujas chaves são os tipos a
    // serem validados. Por exemplo, a chave CPF valida se
    // o campoDeTexto.value é um CPF.
    const campos = {
        cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
        hexColor: validator.isHexColor(campoDeTexto.value),
        email: validator.isEmail(campoDeTexto.value),
        uuid: validator.isUUID(campoDeTexto.value, 4),
        url: validator.isURL(campoDeTexto.value),
    };

    // O objeto 'campos' possui as chaves com o mesmo nome
    // das opções do seletor em nossa página. Assim, podemos
    // selecionar a chave de acordo com o selecionado no HTML
    textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;
}); */
import validator from 'validator';
import './style.css';

const inputText = document.getElementById('input-text');
const submitBtn = document.getElementById('submit-btn');
const selector = document.getElementsByTagName('option');
const textPreview = document.getElementById('text-preview');

const validations = () => {
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const ObjReturn = {
            cpf: validator.isTaxID(inputText.value, 'pt-BR'),
            hexColor: validator.isHexColor(inputText.value),
            email: validator.isEmail(inputText.value),
            uuid: validator.isUUID(inputText.value),
            url: validator.isURL(inputText.value),
        };

        // textPreview.innerHTML = `A validação retornou ${ObjReturn[selector.value]}`;

        for (let i = 0; i < selector.length; i += 1) {
            const element = selector[i];
            if (element.selected) {
                textPreview.innerHTML = `A validação retornou 
                ${ObjReturn[element.value]}`;
            }
        }
    });
};
// console.log(validator.isTaxID(inputText.value, 'pt-BR'));

validations();
