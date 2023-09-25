'''
Em um software monitor, o qual verifica a resiliência de outro software,
precisamos saber o tempo máximo que um software permaneceu sem instabilidades.
Para isto, a cada hora é feito uma requisição ao sistema para verificamos se
está tudo bem. Supondo um array que contenha os estados coletados por nosso
software, calcule quanto tempo máximo que o servidor permaneceu sem
instabilidades.
'''


def longest_sequence(array):
    longest_sequence = 0
    current_sequence = 0

    for el in array:
        if el == 1:
            current_sequence += 1
        else:
            if current_sequence > longest_sequence:
                longest_sequence = current_sequence

    return longest_sequence


print(longest_sequence([0, 1, 1, 1, 0, 0, 1, 1]))
