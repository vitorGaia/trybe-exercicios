from faker import Faker


faker = Faker(locale='pt_BR')

# Faker.seed(0)

print(faker.name())
print(faker.phone_number())
print(faker.cpf())
