# დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა რიცხვი ლუწი ან 3-ის ჯერადი.

num = input("enter a number: ")
if int(num) == (int(num) // 3) * 3:
    print("3ის ჯერადი")
if int(num) == (int(num) // 2) * 2:
    print("ლუწი")