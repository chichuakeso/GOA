/*მომხმარებელს შემოატანინეთ პაროლი შემდეგ კითხეთ ხელახლა რომ გაიმეოროს პაროლი და შეამოწმეთ უდრის თუ არა ისინი ერთმანეთს*/

var pas1 = prompt("enter password")
var pst2 = prompt("repeat password")

if (pas1 == pst2){
    console.log("correct")
}else{
    console.log("wrong, try again")
}
