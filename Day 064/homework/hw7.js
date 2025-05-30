/*შემოიტანე 2 input შეამოწმე, არის თუ არა ორი რიცხვის ჯამი 100-ზე მეტი.*/

var num1 = prompt("enter number")
var num2 = prompt("enter number")

num1 = Number(num1);
num2 = Number(num2);

if (num1 + num2 > 100){
    console.log("sum > 100")
} else{
    console.log("sum < 100")
}