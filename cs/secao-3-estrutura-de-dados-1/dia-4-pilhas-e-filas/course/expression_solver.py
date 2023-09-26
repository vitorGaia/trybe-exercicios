from stack import Stack


def solve_expression(expression):
    stack = Stack()

    tokens_list = expression.split(' ')

    for token in tokens_list:
        if token == '+':
            # sum
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == '*':
            # multiply
            result = stack.pop() * stack.pop()
            stack.push(result)
        else:
            # add the number operation
            stack.push(int(token))

    return stack.pop()


print(solve_expression("5 10 + 3 *"))
