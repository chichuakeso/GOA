/*მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ შემოატანინეთ არჩევანი(ერთიდან მომხმარებლის რიცხვამდე დაბეჭდოს ლუწი, კენტი, კვადრატი ან 3 ის ჯერადი რიცხვი*/

var num = prompt("enter number")
var choice = prompt("enter choice")

var i = 1

while (i < num){
    if (i % 2 == 0 && choice == "even"){
        console.log(i)
    }else if (i % 2 == 1 && choice == "odd"){
        console.log(i)
    }else if (choice == "square"){
        console.log(i**2)
    }else if (i % 3 == 0 && choice == "samis jeradi"){
        console.log(i)
    }else{
        break
    } i++
} 