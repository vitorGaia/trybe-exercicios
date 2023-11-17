from jinja2 import Template


def renderizar_nomes(nomes: list):
    template = Template(
        '{% for nome in nomes %}{{ loop.index }}. {{ nome }}\n{% endfor %}'
    )
    resultado = template.render(nomes=nomes)
    print(resultado)


def renderizar_tabela_produtos(produtos):
    template = Template(
        '''
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                </tr>
            </thead>
            <tbody>
                {% for produto in produtos %}
                <tr>
                    <td>{{ produto.nome }}</td>
                    <td>{{ produto.preco }}</td>
                    <td>{{ produto.estoque }}</td>
                </tr>
                {% endfor %}
            </tbody>
        </table>
        '''
    )
    resultado = template.render(produtos=produtos)
    print(resultado)


def renderizar_formulario_contato(nome, email, mensagem):
    template = Template(
        '''
        <form>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" value="{{ nome }}"><br>
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" value="{{ email }}">
            <br>
            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem">{{ mensagem }}</textarea>
            <br>
            <input type="submit" value="Enviar">
        </form>
        '''
    )
    resultado = template.render(nome=nome, email=email, mensagem=mensagem)
    print(resultado)
