/*const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

console.log(idades.find((idade) => idade < 20));; // 18

console.log(idades.find((idade) => idade === 33));; // undefined*/
// 1
const numbers = [19, 21, 30, 3, 45, 22, 15];
// Adicione seu código aqui
numbers.find((divisor) => {
  if (divisor % 3 === 0 && divisor % 5 === 0) {
    console.log(divisor);
  }
})
// 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];
// Adicione seu código aqui
console.log(names.find((nome) => (nome.length === 5)));

// 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];
// Adicione seu código aqui
// musicas.find((id) => (Object.values(musicas)))
const findMusic = musicas.find((musica) => musica.id === '31031685');
console.log(findMusic);
