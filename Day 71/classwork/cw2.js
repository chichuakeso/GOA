/*შექმენით სია სადაც იქნება 10 რენდომ რიცხვი, შემდეგ კი დაითვალეთ ამ სიის რიცხვების ჯამი for loop ის გამოყენებით*/

let myArray = [1,3,5,7,6,4,8,9,2,10]

let sum = 0
for(let i = 0; i < myArray.length; i++){
    sum+=i
} console.log(sum)