# შექმენით ცვლადები და დააჯამეთ ლუწი და კენტი რიცხვები სიიდან 

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

even = 0
odd = 0

for i in nums:
    if i % 2 == 0:
        even += i
    else:
        odd += i

print(even)
print(odd)