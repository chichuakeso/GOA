# შექმენით პროგრამა რომელიც დაითვლის სიაში რამდენჯერ მეორდება თქვენი სახელი არ გამოიყენოთ count ფუნქცია 

names =["keso","anano", "lizi", "keso", "mari" , "ana", "keso", "anamaria", "elene"]


name2 = 0
for name in names:
    if name == "keso":  #თუ სახელი მოძებნილ სახელს ემთხვევა
        name2 = name2 + 1  #მაშინ ის გაიზრდება
print(name2)