'''
Faça uma função que valide um e-mail, lançando uma exceção quando o valor for
inválido. Endereços de e-mail válidos devem seguir as seguintes regras:

Devem seguir o formato nomeusuario@nomewebsite.extensao;

Nome de usuário deve conter somente letras, dígitos, traços e underscores (_);

O nome de usuário deve iniciar com uma letra;

O nome do website deve conter somente letras e dígitos;

O tamanho máximo da extensão é de 3 caracteres.
'''
from exercicio_19 import validate_email
import pytest


# --- USERNAME TEST ---
def test_username_contem_apenas_letras():
    assert validate_email('aaaa@nomewebsite.ext') is None


def test_username_contem_apenas_letras_ou_digitos():
    assert validate_email('aa27@nomewebsite.ext') is None


def test_username_contem_apenas_letras_digitos_ou_tracos():
    assert validate_email('aa-27@nomewebsite.ext') is None


def test_username_contem_apenas_letras_digitos_tracos_ou_underscores():
    assert validate_email('aa_27@nomewebsite.ext') is None


def test_username_deve_comecar_com_uma_letra():
    assert validate_email('aa-27@nomewebsite.ext') is None


def test_username_lanca_execao_se_nao_comecar_com_uma_letra():
    with pytest.raises(ValueError):
        validate_email('2aa-27@nomewebsite.ext')


def test_username_lanca_execao_se_nao_for_um_email_valido():
    with pytest.raises(ValueError):
        validate_email('*aa-27@nomewebsite.ext')


# --- WEBSITE TEST ---
def test_website_contem_apenas_letras_e_digitos():
    assert validate_email('aa_27@website123.com') is None


def test_website_lanca_execao_caso_tenha_caractere_invalido():
    with pytest.raises(ValueError):
        validate_email('aa_27@*website123.com')


# --- EXTENSION TEST ---
def test_extension_deve_conter_apenas_3_caracteres():
    assert validate_email('aa_27@website123.com') is None


def test_extencion_lanca_execao_caso_tenha_caractere_invalido():
    with pytest.raises(ValueError):
        validate_email('aa_27@website123.comm')
