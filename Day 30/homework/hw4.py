#შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ეს რიცხვი დადებითია თუ უარყოფითი


def pos_neg(num):
    if num > 0:
        return "positive"
    else:
        return "negative"
    
print(pos_neg(5))
print(pos_neg(-5))