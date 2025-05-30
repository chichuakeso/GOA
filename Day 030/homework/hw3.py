#შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ლუწია ეს რიცხვი თუ კენტი

def even_odd(num):
    if num % 2 == 0:
        return "even"
    else:
        return "odd"
    
print(even_odd(3))
print(even_odd(2))
