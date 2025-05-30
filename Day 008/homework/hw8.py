# მომხმარებელს შემოატანინეთ მისი ასაკი და შეამოწმეთ არის თუ არა სრულწლოვანი 

age = input("enter your age: ")
if int(age) > 18:
    print("you're are over or the age of 18")
elif int(age) == 18:
    print("you're 18")
elif int(age) < 18:
    print("you are under the age of 18")