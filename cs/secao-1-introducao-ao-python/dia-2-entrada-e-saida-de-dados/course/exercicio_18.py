'''
Escreva um programa que retorne uma lista com os valores numéricos de 1 a N,
mas com as seguintes exceções:
Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;
Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;
Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz” ao invés do número.
'''


def fizzbuzz(n):
    numbers = []
    for el in range(1, n + 1):
        if el % 3 == 0 and el % 5 == 0:
            numbers.append('FizzBuzz')
        elif el % 3 == 0:
            numbers.append('Fizz')
        elif el % 5 == 0:
            numbers.append('Buzz')
        else:
            numbers.append(el)
    return numbers


print(fizzbuzz(15))
