#მომხმარებელს შემოატანინეთ ორი რიცხვი ხოლო ამის შემდეგ for loop - ის გამოყენებით გამოიტანეთ ამ რიცხვებს შორის ჯამი და ნამრავლი.

num1 = int(input("enter number: "))
num2 = int(input("enter number: "))

sum = 0
mult = 1
for i in range(num1, num2 + 1):
    sum += i
    mult *= i
print(sum)
print(mult)