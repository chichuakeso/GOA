# 4) ერთიდან 100 მდე დაბეჭდეთ ყველა რიცხვი თან გვერძე მიუწერეთ ლუწია თუ კენტი  while loop ის გამოყენებით 


i = 1

while i < 100:
    if i % 2 == 0:
        print(str(i) + " even")
    elif i % 2 != 0:
        print(str(i) + " odd")
    i += 1