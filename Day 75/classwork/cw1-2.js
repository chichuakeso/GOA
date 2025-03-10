/*შექმენით ობიექტი სახელად myInfo სადაც შეინახავთ თქვენს სახელს, გვარს, ასაკს და ჰობის*/

const myInfo = {
    name : "Kesaria",
    surename : "Chichua",
    age : "16",
    hobby : "reading",
} 
console.log(myInfo)

/*შექმნილი ობიექტიდან გამოიტანეთ ყველა მნიშვნელობა ცალ-ცალკე და შემდეგ ობიექტს დაამატეთ თქვენი ჯგუფი*/

console.log(myInfo.name);  
console.log(myInfo.surename); 
console.log(myInfo.age);       
console.log(myInfo.hobby);

myInfo.group = "50"
console.log(myInfo)