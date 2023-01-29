const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Filtre todos os objetos do gênero ficção científica ou fantasia.🚀
const fantasyOrScienceFiction = () => books.filter((book) => book.genre == 'Ficção Científica' || book.genre == 'Fantasia')

// Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.🚀
const oldBooksOrdered = () => books.filter((book) => {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const calcIdade = anoAtual - book.releaseYear;
  if (calcIdade > 60) {
    return book
  }
}).sort((a, b) => a.releaseYear - b.releaseYear)

// Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.
const booksByAuthorBirthYear = (birthYear) => books.filter((book) => book.author.birthYear == birthYear).map((book) => book.name)

// Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.🚀
const fantasyOrScienceFictionAuthors = () => fantasyOrScienceFiction().map((book) => book.author.name).sort()

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.🚀
const oldBooks = () => oldBooksOrdered().map((book) => book.name)

// Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.🚀
const authorWith3DotsOnName = () => books.find((book) => book.author.name[1] == '.' && book.author.name[4] == '.' &&  book.author.name[7] == '.').name

// Fonte: <https://restcountries.com/v2/all>
const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230
  },
  {
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  }
];

// Calcule a quantidade total da população de todos os países.
const getPopulation = () => countries.reduce((a, b) => (a + b.population), 0)

// Calcule a área total de todos os países.
const getTotalArea = () => countries.reduce((acumulador, countrie) => (acumulador + countrie.area), 0)

// Encontre o país com o maior nome.🚀
const longestName = () => countries.reduce((acumulador, countrie) => countrie.name.length > acumulador.name.length ? countrie : acumulador)

// Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.🚀
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
const countA = () => names.join().toLocaleLowerCase().split('').reduce((acumulador, name) => (name === 'a' ? acumulador += 1 : acumulador), 0)

// Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes:🚀
// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = () => students.map((studant, index) => ({
  name: studant,
  average: grades[index].reduce((a, b) => (a + b), 0) / grades[index].length,
}))

console.log(studentAverage());
