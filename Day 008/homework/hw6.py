# დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა მომხმარებლის რიცხვი 0-ზე ნაკლები.

num = input("enter a number: ")
if int(num) < 0:
    print("the number is less than 0")
elif int(num) == 0:
    print("0")
else:
    print("the number is more than 0")

