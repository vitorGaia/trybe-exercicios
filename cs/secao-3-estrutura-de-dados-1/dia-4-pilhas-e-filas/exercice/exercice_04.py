from exercice_02 import Stack

garage = Stack()

option = 0

while option != 4:
    print('Operations: ')
    print('1. Add vehicle')
    print('2. Remove a vehicle')
    print('3. Parked vehicles')
    print('4. Close the program')
    option = int(input('Option: '))

    if option == 1:
        plate_number = input('Plate number: ')
        garage.push(plate_number)
        print(f'Vehicle {plate_number} parked')

    elif option == 2:
        vehicle_plate = input('Plate number: ')
        street = Stack()
        removed = False

        while not garage.is_empty():
            parked_plate = garage.pop()
            if parked_plate == vehicle_plate:
                print(f'Vehicle {vehicle_plate} removed')
                removed = True
            else:
                street.push(parked_plate)

        while not street.is_empty():
            street_vehicle = street.pop()
            garage.push(street_vehicle)

        if not removed:
            print('There is not vehicle parked with this place')

    elif option == 3:
        print(f'Parked vehicles: {str(garage)}')

    else:
        print('Finishing The garage Plus 2000!')
        option = 4


'''
Este algoritmo realiza inserções de itens, que na Pilha possui Complexidade de
tempo é O(1), porém existem alguns whiles que percorrem listas, e por isso sua
Complexidade de tempo é O(n).
'''
