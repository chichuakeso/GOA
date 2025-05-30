#  დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა მომხმარებლის შემოტანილი  რიცხვი 10-ზე ნაკლები.

num = input("enter a number: ")
if int(num) < 10:
    print("less than 10")
elif int(num) == 10:
    print("10")
else:
    print("more than 10")