/*
// crie um algoritmo que imprima na tela o fatorial de 10.

let dezFatorial = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1;
console.log(dezFatorial);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.

let word = 'banana';
let reverseWord = [];

for (index = word.length - 1; index >= 0; index -= 1) {
    reverseWord.push(word[index]);
}

console.log(reverseWord);

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';
let menorPalavra = '';

for (let index = 0; index < array.length; index += 1) {
    if (maiorPalavra.length < array[index].length) {
        maiorPalavra = array[index];
    }
}

menorPalavra = maiorPalavra;
for (let index = 0; index < array.length; index += 1) {
    if (menorPalavra.length > array[index].length) {
        menorPalavra = array[index];
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);
*/
// escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let maiorPrimo = 0;

for (let indexNumber = 2; indexNumber < 51; indexNumber += 1) {
    let ePrimo = true;
    for (let indexDivisor = 2; indexDivisor < indexNumber; indexDivisor += 1) {
        if (indexNumber % indexDivisor === 0) {
            ePrimo = false;
        }
    }
    if (ePrimo) {
        maiorPrimo = indexNumber;
    }
}
console.log(maiorPrimo);