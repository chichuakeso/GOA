#შექმენით სია რომელშიც გექნებათ ოცი სხვადასხვა რიცხვი შემდეგ კი დაბეჭდეთ მხოლოდ 10-ზე ნაკლები და მხოლოდ ლუწი რიცხვები, ისე რომ ლუწიც იყოს და 10-ზე ნაკლებიც, გამოიყენეთ for loop


num = [2, 45, 12, 4, 5, 65, 10, 7, 9, 1, 3]

for i in num:
    if i < 10 and i % 2 == 0:
        print(i)