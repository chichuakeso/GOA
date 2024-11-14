# დაითვალე დადებითი და უარყოფითი რიცხვების ჯამი სიიდან 

nums = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10]

pos = 0
neg = 0

for i in nums:
    if i > 0:
        pos += i
    elif i < 0:
        neg += i
print(pos)
print(neg)