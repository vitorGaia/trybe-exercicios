'''
Você têm dois arrays de números inteiros que representam:

I - instantes de entrada e saídas em uma biblioteca
II - um número que represente um instante a ser buscado.

Retorne quantas pessoas estudantes estão na biblioteca naquele instante.
Considere que todo estudante entrou e saiu da biblioteca.
'''
entradas = [1, 2, 3]
saidas = [3, 2, 7]
instante_buscado = 8


def instant_search(entry, exit, target):
    count_student = 0

    for i in range(len(entry)):
        if target >= entry[i] and target <= exit[i]:
            count_student += 1

    return count_student


print(instant_search(entradas, saidas, instante_buscado))
