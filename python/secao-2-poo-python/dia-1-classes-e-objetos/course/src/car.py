class Car:
    def __init__(
        this, brand: str, model: str, year: int, color: str
    ) -> None:
        this.brand = brand
        this.model = model
        this.year = year
        this.color = color

    def identify(this) -> None:
        print(
            f'Meu carro é um {this.model}, '
            f'da {this.brand}. '
            f'Ele é do ano {this.year} e tem a cor {this.color}'
        )
