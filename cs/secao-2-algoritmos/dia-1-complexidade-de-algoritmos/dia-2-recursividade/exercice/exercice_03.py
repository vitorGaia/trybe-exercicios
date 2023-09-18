'''
Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.
'''

test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


def maior_inteiro_aux(lista, tamanho):
    if (tamanho == 1):
        return lista[0]
    else:
        maior_do_resto_da_lista = maior_inteiro_aux(lista, tamanho - 1)

        if (maior_do_resto_da_lista > lista[tamanho - 1]):
            return maior_do_resto_da_lista
        else:
            return lista[tamanho - 1]


def maior_numero(lista):
    tamanho = len(lista)
    return maior_inteiro_aux(lista, tamanho)


print(maior_numero(test))
