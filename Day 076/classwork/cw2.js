/*შექმენით ფუნქცია რომელიც შეცვლის ელემენტის შიგთავსს , გამოიყენეთ onClick - მეთოდი*/

let p = document.getElementsByTagName("p")

function change(){
    p[0].style.color = "red"
    p[0].innerHTML = "KESO CHICHUA"
}