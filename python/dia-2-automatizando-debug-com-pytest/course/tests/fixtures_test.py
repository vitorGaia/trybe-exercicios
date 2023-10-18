import json
import os


def test_print_to_stdout(capsys):
    print('Hello world!!')
    captured = capsys.readouterr()
    assert captured.out == 'Hello world!!\n'


def test_error_to_stderr(capsys):
    import sys
    sys.stderr.write('Error message!\n')
    captured = capsys.readouterr()
    assert captured.err == 'Error message!\n'


def my_func():
    return 'Você digitou {}!'.format(input('Digite algo: '))


def test_my_function(monkeypatch):
    def mock_input(_):
        return 'Pitão'

    monkeypatch.setattr('builtins.input', mock_input)
    output = my_func()

    assert output == 'Você digitou Pitão!'


def generate_output(content, path):
    with open(path, 'w', encoding='utf-8') as file:
        file.write(json.dumps(content))


def test_generate_output(tmp_path):
    content = {'a': 1}
    output_path = tmp_path / 'out.json'
    # O operador '/' funciona na linha anterior pois temp_path não é uma
    # string comum, mas sim um objeto Path

    generate_output(content, output_path)

    assert os.path.isfile(output_path)
    with open(output_path) as file:
        assert file.read() == '{"a": 1}'
