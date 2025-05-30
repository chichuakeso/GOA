#მომხმარებელს შეეკითხეთ ორი რიცხვი შემდეგ კი შექმენით ფუნქცია რომელსაც არგუმენტად გადასცემთ ამ ორ რიცხვს ხოლო ფუნქცია დააბრუნებს ამ ორი რიცხვის ჯამს, ასევე გააკეთე ასეთი 4 ფუნქცია სხვადასხვა მათემატიკური მოქმედებებისთვის, გამოიყენეთ პარამეტრები და არგუმენტად გადაეცით მომხარებლის შემოტანილი რიცხვები

num1 = int(input("enter number: "))
num2 = int(input("enter number: "))

def add(a, b):
    return num1 + num2

def min(a, b):
    return num1 - num2

def mult(a, b):
    return num1 * num2

def div(a, b):
    return num1 / num2


print(add(num1, num2))
print(min(num1, num2))
print(mult(num1, num2))
print(div(num1, num2))