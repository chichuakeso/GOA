# შექმენით სია რომელშიც იქნება სახელები შემდეგ კი შექმენით პროგრამა რომელიც ამოშლის ყველა სახელს რომელიც "t" ასოზე იწყება და ჩაამატებს ახალ სიაში

names =["keso","anano", "lizi", "tako", "mari" , "ana", "tamari", "anamaria", "elene"]
t = []

for element in names:
    if element[0] == "t":
        t.append(element)
print(t)


