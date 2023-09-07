# Crie uma função que receba um número inteiro N e retorne o somatório de
# todos os números de 1 até N.

def sum_values(n):
    total = 0
    for i in range(1, n + 1, +1):
        total += i
    return total


print(sum_values(5))
