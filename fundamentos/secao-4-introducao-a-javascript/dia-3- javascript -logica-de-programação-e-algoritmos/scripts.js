
// crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial = 10;

for (index = fatorial; index > 0; index -= 1) {
   // fatorial = fatorial - 1;
    fatorial = fatorial *= index
    console.log(fatorial);
}

/*
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

// escreva um algoritmo que imprima no console o maior número primo entre 2 e 50. (failure)

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

// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 5;
let line = '';
let symbol = '?';

for (let index = 0; index < n; index += 1) {
    line = line += symbol;
}

for (let index = 0; index < n; index += 1) {
    console.log(line);
}

// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 5;
let line = '';
let symbol = '?';
let imputPosition = n;

for (let index = 0; index <= n; index += 1) {
    
    for (let index2 = 0; index2 <= n; index2 += 1) {
        
        if (index2 < imputPosition) {
            
            line = line + ' ';
        
        } else {
            
            line = line + symbol;
        }
    }

    console.log(line);
    line = '';
    imputPosition -= 1;
}
*/
// Depois, faça uma pirâmide com n asteriscos de base

