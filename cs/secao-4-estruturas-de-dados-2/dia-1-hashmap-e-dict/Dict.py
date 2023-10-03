'''
employee_registry = {}

employee_registry[14] = 'name1'
employee_registry[23] = 'name2'
employee_registry[10] = 'name3'
employee_registry[9] = 'name4'
print(employee_registry)

employee_registry[10] = 'name30'
print(f"Novo valor do id 10, após a atualização: {employee_registry[10]}")
'''

double = {i: i*2 for i in range(3, 21)}
# print(double)

for key in double.keys():
    if key % 2 != 0:
        double[key] = key * 3

print(double)

string = 'vitãoo'
count_chars = {}

for char in string:
    if char not in count_chars:
        count_chars[char] = 1
    else:
        count_chars[char] += 1

# print(count_chars)
