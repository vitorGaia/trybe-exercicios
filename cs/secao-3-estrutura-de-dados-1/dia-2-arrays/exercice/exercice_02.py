'''
Em um jogo de baralho, as cartas estão representadas por um array numérico.
Para iniciar o jogo, devemos embaralhar as cartas. Faremos isto dividindo uma
porção de cartas em 2 e depois mesclando as duas porções.
'''
import random


def shuffles_cards(array):
    mid_index = len(array) // 2

    part_1 = array[:mid_index]
    part_2 = array[mid_index:]

    random.shuffle(part_1)
    random.shuffle(part_2)

    return part_1 + part_2


print(shuffles_cards([1, 4, 4, 7, 6, 6]))
