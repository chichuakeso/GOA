# )შემოატანინეთ მომხმარებელს რიცხვი და დაადგინეთ არის თუ არა დადებითი უარყოფითი ან ნულის ტოლი 

num = int(input("enter a number: "))
if num > 0:
    print("the number is positive")
elif num == 0:
    print("the number is 0")
elif num < 0:
    print("the number is negative")