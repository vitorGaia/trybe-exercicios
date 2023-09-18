// como encontrar a fruta com maior e menor preço

const frutas = [
    { nome: 'Banana', preco: 10.00 },
    { nome: 'Maça', preco: 12.50 },
    { nome: 'Melão', preco: 7.76 },
    { nome: 'Abacate', preco: 5.22 },
]

const maiorMenor = (frutas) => {
    const valores = frutas.map((fruta) => fruta.preco)
    const maior = Math.max(...valores)
    const menor = Math.min(...valores)
    return [
        frutas.find((fruta) => fruta.preco === maior),
        frutas.find((fruta) => fruta.preco === menor),
    ]
}

console.log(maiorMenor(frutas));
