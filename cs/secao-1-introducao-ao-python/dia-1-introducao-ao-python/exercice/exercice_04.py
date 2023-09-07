# Crie uma função que receba uma lista de nomes e retorne o nome com a maior
# quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia",
# "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

param = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def max_length(names):
    res = names[0]
    for el in names:
        if len(el) > len(res):
            res = el
    return res


# print(max_length(param))
