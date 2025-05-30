# დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა მომხმარებლის შემოტანილი რიცხვი 100-ზე მეტი და ლუწი.

num = input("enter a number: ")
if int(num) > 100 and int(num) // 2 * 2 == int(num):
    print("the number is more than 100 and even")
else:
    print("the number is either not more than 100 or even")