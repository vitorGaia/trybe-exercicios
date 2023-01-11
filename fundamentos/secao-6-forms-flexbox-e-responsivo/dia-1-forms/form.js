const submitButton = document.getElementById('submit-button');
const aceitaFotos = document.getElementById("concordo-2");
const resetButton = document.getElementById('reset-button');

function handleSubmit(event) {
  event.preventDefault();
}

const resetButtonFunction = () => {
  const formElements = document.getElementsByTagName('input');
  const textArea = document.getElementsByTagName('textarea');
  for (i = 0; i < formElements.length; i += 1) {
    const element = formElements[i];
    if (element.type === 'radio' || element.type === 'checkbox') {
      element.checked = false;
    } else {
      element.value = '';
    }
  }
  textArea.value = '';
};

const enableSubmit = () => {
  submitButton.disabled = !aceitaFotos.checked;
};

function textInputValidation() {
  const email = document.querySelector('#input-user').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#input-name').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#resposta').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

window.onload = () => {
  submitButton.addEventListener('click', handleSubmit);
  resetButton.addEventListener('click', resetButtonFunction);
  aceitaFotos.addEventListener('change', enableSubmit); // Com checkboxes usa-se change para adicionar enventos
};