// Faça uma lista com as suas frutas favoritas
const specialFruit = ['açaí', 'abacate', 'bacurí'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['m&m', 'leite de moça', 'djamba'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit, 'dj cleiton rasta', ...additional, 'tua mãe',];
};

// console.log(fruitSalad(specialFruit, additionalItens));

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(4, 7, 8, 9, 60)); // 88

// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
// console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
// console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

// const { a: name, b: classAssigned, c: subject } = student;

// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userInfos = {...user, ...jobInfos,};

const {name, age, nationality, profession, squad, squadInitials} = userInfos

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squad}`);
