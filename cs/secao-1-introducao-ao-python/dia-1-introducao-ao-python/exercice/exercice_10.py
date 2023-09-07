from string import Template
# Um posto está vendendo combustíveis com a seguinte tabela de descontos:

#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.

# Escreva uma função que receba o número de litros vendidos, o tipo de
# combustível (codificado da seguinte forma: A - álcool, G - gasolina), e
# retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da
# gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.


def calc_discont(type, liters):
    gasoline_liter_price = 2.50
    alchool_liter_price = 1.90

    template = Template(
        'Valor total: $total_price, '
        'Desconto: $discont, '
        'Valor final: $final_price'
    )

    if type == 'A':
        total_price = liters * alchool_liter_price
        if liters < 20:
            discont = total_price * 0.04
        else:
            discont = total_price * 0.06
        final_price = total_price - discont

    if type == 'G':
        total_price = liters * gasoline_liter_price
        if liters < 20:
            discont = total_price * 0.03
        else:
            discont = total_price * 0.05
        final_price = total_price - discont

    return template.substitute(
        total_price=total_price,
        discont=discont,
        final_price=final_price
    )

# def fuel_price(type, liters):
#     if type == "A":
#         price = 1.90
#         discount = 0.03
#         if liters > 20:
#             discount = 0.05
#     elif type == "G":
#         price = 2.50
#         discount = 0.04
#         if liters > 20:
#             discount = 0.06
#     total = price * liters
#     total -= total * discount
#     return total


print(calc_discont('A', 30))
