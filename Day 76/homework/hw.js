let h1 = document.getElementsByTagName("h1")

let counter = 0

function plus(){
    counter++
    h1[0].innerHTML = counter
    h1[0].style.color = "green"
}

function minus(){
    counter--
    h1[0].innerHTML = counter
    h1[0].style.color = "red"
}

function reset(){
    h1[0].innerHTML = 0
    h1[0].style.color = "black"
}