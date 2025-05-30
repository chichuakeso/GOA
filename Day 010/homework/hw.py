# 1) შექმენით კალკულატორი, მომხმარებელს შეეკითხეთ ორი რიცხვი, შემდეგ შეეკითხეთ რა მოქმედების შესრულება სურს ამ ორ რიცხვზე და მისი პასუხიდან გამომდინარე შეასრულეთ მოქმედება და დაბეჭდეთ მაგალითად თუ მომხმარებელი შემოიტანს რიცხვებს 5 და 7 , და შემოიტანს მოქმედებას მაგალითად დამატებას თქვენ უნდა დაუბეჭდოთ 5 + 7 = 12


num1 = input("enter a number: ")
op = input("operation: ")
num2 = input("enter a number: ")

if op == "+":
    print (int(num1) + int(num2))
elif op == "-":
    print (int(num1) - int(num2))
elif op == "*":
    print (int(num1) * int(num2))
elif op == "/":
    print (int(num1) / int(num2))
elif op == "//":
    print (int(num1) // int(num2))
else:
    print("error")
