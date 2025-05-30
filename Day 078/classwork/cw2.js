/*)createElement-ის გამოყენებით შექმენით ერთი მშობელი div-ელემენტი, ეს div-ი ჩაამატეთ body-ში , შემდეგ ამ მშობელ div-ში ჩაამატეთ კიდევ ორი შვილი div-ი და განალაგეთ ვერტიკალურად ერთმანეთისგან თანაბარი დაშორებით ,  პირველი დივი იყოს წითელი მეორე იყოს მწვანე , ასევე დაუმატეთ სასურველი სტილები 
*/


    let body = document.body
    let div1 = document.createElement("div")
    body.appendChild(div1)
    div1.style.display = "flex"
    div1.style.flexDirection = "column"
    div1.style.justifyContent = "space-between"
    div1.style.height = "100vh"

    let childDiv1 = document.createElement("div")
    let childDiv2 = document.createElement("div")
    div1.appendChild(childDiv1)
    div1.appendChild(childDiv2)

    childDiv1.style.width = "100px"
    childDiv1.style.height = "100px"
    childDiv1.style.backgroundColor = "red"

    childDiv2.style.width = "100px"
    childDiv2.style.height = "100px"
    childDiv2.style.backgroundColor = "green"
