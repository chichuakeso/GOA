# შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვებით სავსე სია ამ ფუნქციამ კი უნდა დააბრუნოს ამ სიის რიცხვების ჯამი

num = [1, 2, 3, 4, 5]

def add(num):
    sum = 0
    for element in num:
        sum += element
    return sum
print(add(num))