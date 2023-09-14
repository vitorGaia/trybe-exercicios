'''
Faça um programa que receba um nome e imprima o mesmo na vertical em escada
invertida.
'''

name = input('Insira seu nome: ').upper()
# for el in name[::-1]:
#     print(el.upper())

for el in range(len(name), 0, -1):
    print(name[:el])
