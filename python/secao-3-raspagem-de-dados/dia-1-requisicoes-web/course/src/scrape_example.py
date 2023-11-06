from parsel import Selector
import requests


# response = requests.get('http://books.toscrape.com/')
# selector = Selector(text=response.text)
# print(selector)
# titles = selector.css('.product_pod h3 a::attr(title)').getall()
# prices = selector.css('.product_price .price_color::text').getall()
# print(titles)

# for product in selector.css('.product_pod'):
#     title = product.css('h3 a::attr(title)').get()
#     price = product.css('.price_color::text').get()

#     print(title, price)


URL_BASE = 'http://books.toscrape.com/catalogue/'
next_page_url = 'page-1.html'

while next_page_url:
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)

    for product in selector.css('.product_pod'):
        title = product.css('h3 a::attr(title)').get()
        price = product.css('.price_color::text').re(r"£\d+\.\d{2}")
        print(title, price)

        # Busca o detalhe de um produto
        detail_href = product.css("h3 a::attr(href)").get()
        detail_page_url = URL_BASE + detail_href

        # Baixa o conteúdo da página de detalhes
        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)

        # Extrai a descrição do produto
        description = detail_selector.css(
            "#product_description ~ p::text"
        ).get()

        suffix = "...more"
        if description.endswith(suffix):
            description = description[:-len(suffix)]

        print(description)

    next_page_url = selector.css('.next a::attr(href)').get()
