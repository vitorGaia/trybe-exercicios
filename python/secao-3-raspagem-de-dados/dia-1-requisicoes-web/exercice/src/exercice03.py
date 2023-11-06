'''
Às vezes, você precisa fazer com que o seu raspador da Web pareça estar
fazendo solicitações HTTP como o navegador, para que o servidor retorne os
mesmos dados que você vê no seu navegador. Faça uma requisição a
https://scrapethissite.com/pages/advanced/?gotcha=headers e verifique se foi
bem sucedida.
'''
import requests


response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={
        "User-agent": "Mozilla",
        "Accept": "text/html",
    },
)
assert (
    "User-Agent value doesn't look like a standard mozilla/chrome/safari value"
    not in response.text
)
