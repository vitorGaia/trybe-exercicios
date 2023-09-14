'''
Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha
que adivinhar uma palavra que será mostrada com as letras embaralhadas. O
programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador
terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser
mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
'''
import random

words = ['lau1', 'lau2', 'lau3']
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
