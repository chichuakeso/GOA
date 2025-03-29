/*შექმენით დოკუმენტში რამდენიმე ერთნაირი ელემენტი და querySelector()ის და  querySelectorAll() ის გამოყენებით javascript-იდან შეუცვალეთ სტილები*/

let txt = document.querySelector("h1")

txt.style.background = "red"
txt.style.color = "white"

let txt2 = document.querySelectorAll("p")

txt2[0].style.background = "blue"
txt2[0].style.color = "purple"

txt2[1].style.background = "pink"
txt2[1].style.color = "brown"