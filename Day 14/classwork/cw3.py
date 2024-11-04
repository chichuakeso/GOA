# 3) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი მომხარებლის შემოტანილ რიცხვამდე დაბეჭდეთ ყველა რიცხვის საშუალო არითმეტიკული 

num = int(input("enter a number: "))
sum = 0

for i in range(1, num + 1):
    sum = sum + i
print(sum / num)