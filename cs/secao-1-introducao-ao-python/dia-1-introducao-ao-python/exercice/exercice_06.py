# Crie uma função que receba os três lado de um triângulo e informe qual o
# tipo de triângulo formado ou "não é triangulo", caso não seja possível
# formar um triângulo.

# def calc_triangle(a, b, c):
#     if a == b or a == c or b == c:
#         return 'Triângulo Isósceles'
#     elif a == b and a == c and b == c:
#         return 'Triângulo Equilátero'
#     elif not (a == b) and not (a == c) and not (b == c):
#         return 'Triângulo Escaleno'
#     else:
#         return 'Não é triangulo'


def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"
