from jinja2 import Template


template_file = open('template.html').read()
template = Template(template_file)

data = {
    'saudacao': 'Eu sou um template html',
    'informacao': 'Lau',
    'contexto': 'Simas Turbo',
}

output = template.render(data)
print(output)
