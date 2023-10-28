from typing import Dict


class Stock:
    def __init__(self, products: Dict[str, int]) -> None:
        self.products = products

    def add_product_to_stock(self, name: str, quantity: int) -> None:
        if name in self.products:
            self.products[name] += quantity
        else:
            self.products[name] = quantity

    def remove_product_to_stock(self, name: str, quantity: int) -> None:
        if name not in self.products or quantity > self.products[name]:
            raise ValueError(
                f'Produto {name} não encontrado ou quantidade insuficiente.'
            )

        self.products[name] -= quantity

    def update_product_to_stock(self, name: str, new_quantity: int) -> None:
        if name not in self.products:
            raise ValueError(
                f'Produto {name} não encontrado.'
            )

        self.products[name] = new_quantity

    def view_stock(self) -> None:
        for product, quantity in self.products.items():
            print(f'{product}: {quantity}')
