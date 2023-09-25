'''
Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado a demanda
de analisar um array de números inteiros que representam os produtos dessa
empresa. Verifique quantos produtos formam boas combinações, ou seja, quando
um produto é igual ao outro e seu índice é maior que o anterior. Esta
combinação pode ser utilizada para modificar os produtos de uma página.
'''


def good_pairs(numbers):
    res = 0
    i = 0
    size = len(numbers)

    for i in range(size):
        for j in range(i + 1, size):
            if numbers[i] == numbers[j]:
                res += 1
    return res


print(good_pairs([1, 3, 1, 1, 2, 3]))
# O(n²)
