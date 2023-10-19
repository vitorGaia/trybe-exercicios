import pytest
'''
passar para uma fixture autouse=True faz com que ela seja utilizada pelas
funções de teste mesmo que elas não recebam a fixture explicitamente como
parâmetro.
'''


@pytest.fixture(scope='session', autouse=True)
def faker_seed():
    return 'Trybe'


@pytest.fixture(scope='session', autouse=True)
def faker_locale():
    return 'pt_BR'
