/*)შექმენით სია, ამ სიაში შეინახეთ String-ტიპის მონაცემები და for-ციკლის გამოყენებით ახალ სიაში დაამატეთ ძველი სიიდან ყოველი სიტყვის პირველი ასო*/

let myArray = ["one", "two", "three", "four", "five"]

let firstletter = []
for (let i = 0; i < myArray.length; i++){
    firstletter.push(myArray[i][0])
} console.log(firstletter)