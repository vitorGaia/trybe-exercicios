import pytest
from main import mean


@pytest.mark.parametrize(
    'input_numbers, expected_result',
    [
        ([1, 2, 3, 4, 5], 3.0),
        ([2.5, 3.75, 1.25, 4], 2.875),
    ],
)
def test_mean(input_numbers, expected_result):
    assert mean(input_numbers) == expected_result


def test_mea_fail():
    with pytest.raises(ZeroDivisionError):
        mean([])
