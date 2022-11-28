/*
//Obtenha o valor “Serviços” do array menu;
//Procure o índice do valor “Portfólio” do array menu;
//Adicione o valor “Contato” no final do array menu;

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato')
let menuServices = menu;

console.log(menuServices);

//Utilize o for para imprimir os elementos da lista groceryList com o console.log();

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

//Utilize o for/of para imprimir os elementos da lista names com o console.log();

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log(name);
}

///////////////////

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arraySom = null;

for (let index = 0; index < numbers.length; index = index += 1) {
    //console.log(numbers[index]);
    arraySom = arraySom + numbers[index];
}
//console.log(arraySom);

let mediaAritmetica = arraySom / numbers.length;
//console.log(mediaAritmetica);

if (mediaAritmetica > 20) {
    console.log('valor maior que 20');
}
else {
    console.log('valor menor ou igual a 20');
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorNumber = 0;

for (let index = 0; index < numbers.length; index = index += 1) {
    if (maiorNumber < numbers[index]) {
        maiorNumber = numbers[index];
    }
}
console.log(maiorNumber);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let oddNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        oddNumbers.push(numbers[index]);
    }
}
if (oddNumbers === 0) {
    console.log('nenhum valor ímpar encontrado');
  } else {
    console.log(oddNumbers);
  }

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorNumber = 1000;

for (let index = 0; index < numbers.length; index = index += 1) {
    if (menorNumber > numbers[index]) {
        menorNumber = numbers[index];
    }
}
console.log(menorNumber);

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let arrayVoid = [];

for (let index = 1; index <= 25; index += 1) {
    arrayVoid.push(index);
}
console.log(arrayVoid);

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (index = 0; index < arrayVoid.length; index += 1) {
    console.log(arrayVoid[index] / 2);
}
*/

//Ordene o array numbers em ordem crescente e imprima seus valores;
//Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      
        if (numbers[index] < numbers[secondIndex]) {
        
            let position = numbers[index];
        
            numbers[index] = numbers[secondIndex];
        
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);

//Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);
