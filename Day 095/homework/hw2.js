/*შექმენით სია სადაც გექნებათ 5 ობიექტი , ამ ობიექტებში შეინახავთ მომხმარებლის სახელს და ასაკს , თქვენი დავალებაა გაფილტროთ ეს სია და დატობოთ მხოლოდ იმ მომხმარებლის ობიექტები ვისი ასაკიც მეტი ან ტოლი იქნება 18 ზე*/

let info = [
    {
        name:"keso",
        age:17
    },

    {
        name:"anamaria",
        age:17               
    },

    {
        name:"elene",
        age:16               
    },

    {
        name:"lia",
        age:21               
    },

    {
        name:"qeti",
        age:18
    }
]    
const check = el => el.age >= 18
let info2 = info.filter(check)
console.log(info2)