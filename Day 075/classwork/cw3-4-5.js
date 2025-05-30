/*Prompით მომხმარებელს შემოატანინეთ მისი სახელი, გვარი, ასაკი და ჰობი, შემდეგ ეს ინფორმაცია შეინახეთ ობიექტში, ასევე ამ ობიექტს დაუმატეთ ფუნქცია, რომლის გამოძახებაზეც კონსოლში გამოიტანს "Welcome {name}"*/

const userInfo = {
    name : prompt("enter name: "),
    surename : prompt("enter surename: "),
    age : Number(prompt("enter age: ")),
    hobby : prompt("enter hobby: "),
    greet(){
        return "welcome" + this.name
    }
}
console.log(userInfo)
console.log(userInfo.greet())

/*შექმნილი ობიექტებიდან გამოიტანეთ მხოლოდ Keyები შემდეგ კი მხოლოდ Valueები*/

console.log(Object.keys(userInfo))
console.log(Object.values(userInfo))

/*შექმნილ ობიექტს გადაუარეთ for ციკლით და გამოიტანეთ key და value შემდეგი ფორმატით: "{key} is {value}"*/

for (let i in userInfo){
    console.log(i + " is " + String(userInfo[i]))
}