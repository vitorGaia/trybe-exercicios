from pymongo import MongoClient

# client = MongoClient()
# db = client.catalogue
# documents = [
#     {
#         "title": "A Light in the Attic",
#     },
#     {
#         "title": "Tipping the Velvet",
#     },
#     {
#         "title": "Soumission",
#     },
# ]
# db.books.insert_many(documents)
# print(db.books.find_one())
# for book in db.books.find({"title": {"$regex": "t"}}):
#     print(book["title"])
# client.close()

with MongoClient() as client:
    db = client.catalogue
    for book in db.books.find({"title": {"$regex": "t"}}):
        print(book["title"])
