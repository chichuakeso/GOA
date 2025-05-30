/*for-ციკლის გამოყენებით იპოვეთ სიაში ყველაზე დიდი და ყველაზე პატარა რიცხვები*/

let myArray = [1, 3, 2, 5, 4, 6, 8, 7, 9];

let max = myArray[0]; 
let min = myArray[0]; 

for (let i = 1; i < myArray.length; i++) {
    if (myArray[i] > max) {
        max = myArray[i];  
    }
    if (myArray[i] < min) {
        min = myArray[i];  
    }
}console.log(max);
console.log(min);

