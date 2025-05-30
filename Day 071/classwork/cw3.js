/*შექმენით რიცხვებით სავსე სია, შემდეგ მიწვდით თითოეულ ელემენტს და დააჯამეთ მხოლოდ ლუწი რიცხვები აყვანილი კვადრატში ამ სიიდან*/

let myArray = [1,3,2,5,4,6,8,7,9]

let sum = 0
for(let i = 0; i < myArray.length; i++){
    if(myArray[i] % 2 == 0){
        sum+=myArray[i]**2
    }
} console.log(sum)