# შექმენით ფუნქცია რომელშიც იქნება რიცხვებით სავსე სია ხოლო ფუნქცია დააბრუნებს ამ სიის ელემენტების ჯამს


def my_list():
    num =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    num_sum = 0
    for i in range(len(num)):
        num_sum += num[i]

    return num_sum
    
print(my_list())