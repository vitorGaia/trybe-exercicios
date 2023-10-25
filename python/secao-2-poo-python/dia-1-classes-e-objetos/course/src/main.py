from typing import List


def summation(values: List[int]) -> int:
    total = 0
    for el in values:
        total += el
    return total


def string_filter(values: List[str], char: str) -> List[str]:
    result = []
    for el in values:
        if el.startswith(char):
            result.append(el)
    return result


class Car:
    def __init__(this, model: str, year: int) -> None:
        this.model = model
        this.year = year
        this.speed = 0

    def speed_up(this, amount: int) -> None:
        this.speed += amount
        print(
            f'O carro {this.model} do ano {this.year} '
            f'acelera a {this.speed} km/h'
        )

    def speed_down(this, amount: int) -> None:
        this.speed -= amount
        print(
            f'O carro {this.model} do ano {this.year} '
            f'desacelera a {this.speed} km/h'
        )


car = Car("Fusca", 1980)
car.speed_up(20)
car.speed_down(10)
print(car.speed)
