class Stack:

    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return not len(self.__data)

    def push(self, value):
        self.__data.insert_last(value)

    def pop(self):
        return self.__data.remove_last()

    def peek(self):
        return self.__data.get_element_at(len(self.__data))

    def min_value(self):
        if self.is_empty():
            return None

        min_value = self.__data[0]
        for el in self.__data:
            if el < min_value:
                min_value = el
        return min_value
