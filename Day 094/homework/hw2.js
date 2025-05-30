/*შექმენი სია სადაც რენდომულად შეიყვან რამდენიმე სახელს და გვარს , შემდეგ დაწერე ფუნქცია რომელიც დააბუნებს ახალ სიას სადაც წარმოდგენილი იქნება თითოეული სახელი და გვარი ისე როგორც ინიციალები (Giorgi Bibilashvili => G.B)*/

let names = ["kesaria chichua", "anamaria beridze", "elene dvalishvili"]
        let names2 = names.map(element =>{
            let names3 = element.split(" ")
            return `${element} --->  ${names3[0][0].toUpperCase()}.${names3[1][0].toUpperCase()}`
        })
        for(let i of names2){
            console.log(i)
        }