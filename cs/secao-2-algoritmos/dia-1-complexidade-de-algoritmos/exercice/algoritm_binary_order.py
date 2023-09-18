'''
# --- Algoritmo de busca binária ---
def binary_search(numbers, target):
    start = 0
    end = len(numbers) - 1

    while start <= end:
        mid = (start + end) // 2

        if numbers[mid] == target:
            return mid

        if target < numbers[mid]:
            end = mid - 1
        else:
            start = mid + 1

    return -1


numbers = [2, 3, 4, 10, 40]
target = 10

result = binary_search(numbers, target)
print(f"Elemento encontrado na posição: {result}")
'''


'''
# --- Exemplos de complexidade de loop ---
def calculations(n):
    # Linear --> 0(n)
    number1 = 0
    for n1 in range(n):
        number1 += n1

    # Quadrático --> 0(n²)
    number2 = 0
    for n1 in range(n):
        for n2 in range(n):
            number2 += n1 + n2

    # Cúbico --> 0(n³)
    number3 = 0
    for n1 in range(n):
        for n2 in range(n):
            for n3 in range(n):
                number3 += n1 + n2 + n3

    return number1, number2, number3


n1, n2, n3 = calculations(100)
print(f'{n1}, {n2}, {n3}')

# Constante --> O(1)
# Logarítmico --> O(log n)
# Exponencial --> O(2ⁿ)
# Fatorial --> O(n!)
'''
