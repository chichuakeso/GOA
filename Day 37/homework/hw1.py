#გააკეთეთ random student generator რომელსაც გადაეცემა ჯგუფის მოსწავლეებით სავსე სია და დაგვიბრუნებს რენდომულად განაწილებულ გუნდებს მზგავსად როგორც გავაკეთეთ წინა გაკვეთილზე 


import random

names = ["keso", "ana", "sopia", "goga", "luka", "giorgi", "mari", "anamaria"]

listt = []
group = [] 

while names != []:
    if len(names) < 3:
        break
    else:
        for i in range(3):
            name = random.choice(names)
            group.append(name)
            names.remove(name)

    listt.append(group)
    group = []

for i in listt:
    print(i)

print(names)