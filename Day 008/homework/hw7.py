# შეამოწმე, არის თუ არა ციფრი მთელი რიცხვი. 

num = input("enter a  number: ")
num1 = (int(num)) or (float(num))
if num1 == int(num):
    print("whole number")
else:
    print("error")