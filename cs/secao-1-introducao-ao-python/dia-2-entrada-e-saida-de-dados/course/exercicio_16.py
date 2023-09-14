'''
Modifique o exercício anterior para que as palavras sejam lidas de um arquivo.
Considere que o arquivo terá cada palavra em uma linha.
'''
import random

words = ['lau1', 'lau2', 'lau3']

if __name__ == '__main__':
    with open('exercicio_16.txt') as file:
        words = [word.strip() for word in file]

random_word = random.choice(words)
scrambled_word = "".join(random.sample(random_word, len(random_word)))

for el in range(2, -1, -1):
    print(scrambled_word)
    user_response = input('Digite a palavra correta: ')
    if user_response == random_word:
        print('Parabéns, você acertou!!')
        break
    elif not el == 0:
        print(f'Palavra errada, você tem mais {el} tentativas.')
    else:
        print('Fim de jogo.')
