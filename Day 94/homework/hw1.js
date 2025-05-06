/* შექმენით სია სადაც რენდომულად შეიტანთ რიცხვებს , შემდეგ დაწეეთ ფუნქცია რომელიც გადაუვლის თითოეულ ელემენტს სიაში და დააბრუნებს ახალ სიას სადაც იქნება მხოლოდ ლუწი რიცხვები , ასევე შექმენით იგივენაირი მეორე ფუნქცია კენტი რიცხვებისთვის*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let func = element => element % 2 == 0; 
let nums2 = nums.filter(func);
console.log(nums2);
/*EVEN

ODD*/
let nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let func1 = element => element % 2 !== 0; 
let nums4 = nums3.filter(func1);
console.log(nums4);