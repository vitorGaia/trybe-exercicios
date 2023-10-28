from collections import Counter
from typing import List


class Numeros:
    def __init__(self, numeros: List[int]) -> None:
        self.numeros = numeros

    def media(self) -> float:
        return sum(self.numeros) / len(self.numeros)

    def mediana(self) -> float:
        numeros = self.numeros
        index = len(numeros) // 2
        if len(numeros) % 2 == 0:
            return (numeros[index - 1] + numeros[index]) / 2

        return numeros[index]

    def moda(self) -> int:
        numero, _ = Counter(self.numeros).most_common()[0]
        return numero
