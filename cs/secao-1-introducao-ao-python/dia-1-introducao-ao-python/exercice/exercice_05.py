# Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados
# e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma
# função que retorne dois valores em uma tupla contendo a quantidade de latas
# de tinta a serem compradas e o preço total a partir do tamanho de uma parede
# (em m²).

def calc_paint(meters):
    meter_paint_value = 4.44
    total_value = meters * meter_paint_value
    total_cans = total_value // 80
    return (total_cans, round(total_value))


# def paint_costs(area):
#     can_price = 80
#     required_liters = area / 3
#     required_cans = required_liters // 18
#     if required_liters % 18:
#         required_cans += 1
#     return required_cans, required_cans * can_price


print(calc_paint(19))
# print(paint_costs(30))
