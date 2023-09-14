'''
Escreva um programa que retorne uma lista com os valores numéricos de 1 a N,
mas com as seguintes exceções:
Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;
Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;
Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz” ao invés do número.
'''
from exercicio_18 import fizzbuzz


def test_fizzbuzz_deve_retornar_uma_lista_de_numeros():
    assert fizzbuzz(2) == [1, 2]


def test_fizzbuzz_deve_retornar_fizz():
    assert fizzbuzz(3) == [1, 2, 'Fizz']


def test_fizzbuzz_deve_retornar_buzz():
    assert fizzbuzz(5) == [1, 2, 'Fizz', 4, 'Buzz']


def test_fizzbuzz_deve_retornar_fizzbuzz():
    return_mock = [
        1, 2, 'Fizz', 4, 'Buzz',
        'Fizz', 7, 8, 'Fizz', 'Buzz',
        11, 'Fizz', 13, 14, 'FizzBuzz',
    ]
    assert fizzbuzz(15) == return_mock
