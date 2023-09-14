'''
Faça uma função que valide um e-mail, lançando uma exceção quando o valor for
inválido. Endereços de e-mail válidos devem seguir as seguintes regras:

Devem seguir o formato nomeusuario@nomewebsite.extensao;

Nome de usuário deve conter somente letras, dígitos, traços e underscores (_);

O nome de usuário deve iniciar com uma letra;

O nome do website deve conter somente letras e dígitos;

O tamanho máximo da extensão é de 3 caracteres.
'''


def validate_email(email):
    index = 0
    if not email[index].isalpha():
        raise ValueError('Username deve começar com uma letra.')

    while email[index] != '@' and index < len(email):
        letter = email[index]
        if (
            not letter.isalpha()
            and not letter.isdigit()
            and letter not in ('-', '_')
        ):
            raise ValueError(
                'Username deve conter apenas letras, '
                'digitos, traços ou underlines'
            )
        index += 1
    index += 1

    while email[index] != '.' and index < len(email):
        letter = email[index]
        if not letter.isalpha() and not letter.isdigit():
            raise ValueError(
                'Website deve conter apenas letras e digitos.'
            )
        index += 1
    index += 1

    counter = 0
    while index < len(email):
        counter += 1
        index += 1

    if counter > 3:
        raise ValueError(
            'O comprimento máxximo da extenção deve ser 3.'
        )

    return None
