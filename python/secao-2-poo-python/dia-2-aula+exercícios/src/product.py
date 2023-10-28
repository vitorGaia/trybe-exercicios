class Product:
    def __init__(
        self, name: str, code: str, price: float, quantity: int,
    ) -> None:
        self.__name = name
        self.__code = code
        self.__price = price
        self.__quantity = quantity

    def get_price(self) -> float:
        return self.__price

    def get_quantity(self) -> int:
        return self.__quantity

    def update_product_price(self, new_price: float) -> None:
        if new_price < 0:
            raise ValueError('O preço não pode ser negativo.')

        self.__price = new_price

    def add_product_quantity(self, quantity: int) -> None:
        self.__quantity += quantity

    def remove_product_quantity(self, quantity) -> None:
        if self.__quantity < quantity:
            raise ValueError(
                'A quantidade informada é maior que a quantidade disponível'
                f' no estoque: {self.__quantity}'
            )

        self.__quantity -= quantity
