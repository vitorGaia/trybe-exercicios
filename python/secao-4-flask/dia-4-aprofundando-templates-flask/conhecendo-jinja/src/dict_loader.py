from jinja2 import BaseLoader, Environment, TemplateNotFound


class DictLoader(BaseLoader):
    def __init__(self, templates):
        self.templates = templates

    def get_source(self, environment, template):
        if template in self.templates:
            source = self.templates[template]
            return source, None, lambda: False
        raise TemplateNotFound(template)


templates = {
    'index.html': '<h1>Um template usando {{ nome }}</h1>',
    'about.html': '<p>Este é um exemplo de template Jinja2</p>'
}
loader = DictLoader(templates)

enviroment = Environment(loader=loader)

template = enviroment.get_template('about.html')
output = template.render(nome='BaseLoader')
print(output)
