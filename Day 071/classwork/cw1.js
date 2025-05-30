/*მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი დაითვალეთ ერთიდან მომხმარებლსი შემოტანილ რიცხვამდე მხოლოდ ლუწი რიცხვების ჯამი, გამოიყენეთ for*/

let num = Number(prompt("enter number"))

let sum = 0
for(var i = 0; i <= num ; i++){
    if(i % 2 == 0){
        sum += i
    }
}
console.log(sum)