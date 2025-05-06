/* შექმენით სია სადაც შეინახავთ რანდომ სახელებეს , map-ის გამოყენებით მიწვდით თითოეულ ელემენტს სიაში და დააბუნეთ ახალი განახლებული სია სადაც იქნება ყველა სახელი დიდი ასოებით დაწეილი*/

let my_Arr = ["keso", "nicole", "fish"]
let func = up => up.toUpperCase()
let new_Arr = my_Arr.map(func)
console.log(new_Arr)