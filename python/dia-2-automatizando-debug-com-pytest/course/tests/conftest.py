import pytest


@pytest.fixture(scope='function')
def my_list():
    return [1, 2, 3]
