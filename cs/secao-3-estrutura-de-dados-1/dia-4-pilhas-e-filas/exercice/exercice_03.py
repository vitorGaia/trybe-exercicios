from exercice_02 import Stack


class StackOverFlow(Exception):
    pass


class LimitStack(Stack):

    def __init__(self, limit):
        super().__init__()
        self.limit = limit

    def push(self, value):
        if self.size() + 1 > self.limit:
            raise StackOverFlow()
        super().push(value)
