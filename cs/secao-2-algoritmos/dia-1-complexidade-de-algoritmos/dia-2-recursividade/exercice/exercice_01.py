'''
Crie um algoritmo não recursivo para contar quantos números pares existem em
uma sequência numérica (1 a n).
'''


def conta_pares(n):
    count = 0
    for el in range(1, n + 1, +1):
        if (el % 2 == 0):
            count += 1
    return count


print(conta_pares(5))
