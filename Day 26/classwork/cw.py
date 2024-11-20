#შექმენით ერთი სია რომელშიც შეიტანთ სახელებს შემდეგ შექმენით მეორე სია რომელშიც იქნება ისევ სხვადასხვა სახელები გააერთიანეთ ეს ორი სია ჩაამატეთ 5 ინდექსზე ახალი სახელი დაითვალეთ გაერთიანებული სიის სიგრძე და დაითვალეთ თქვენი სახელი რამდენჯერ გვხვდება ამ სიაში, ასევე დაბეჭდეთ რომელ ინდექსზე დგას თქვენი სახელი 


names = ["keso", "ana", "nika", "luka", "andria", "lasha"]
names2 = ["elene", "anastasia", "anamaria", "giorgi", "natia"]

names.extend(names2)
print(names)

names.insert(5, "lika")
print(names)

print(len(names))

print(names.count("keso"))

print(names.index("keso"))