  function Info(email,password){
            this.email = email
            this.password = password
        }
        let arr = JSON.parse(localStorage.getItem("account")) || []
        let register = document.querySelectorAll("form")[0]
        let logIn = document.querySelectorAll("form")[1]

        register.addEventListener("submit",e=>{
            e.preventDefault()
            let acc = new Info(e.target.email.value,e.target.pass.value)
            arr.push(acc)
            localStorage.setItem("account",JSON.stringify(arr))
            alert("registered")
        })

        let kk = document.querySelector("#two")
        let idk = document.querySelector("#one")
        logIn.addEventListener("submit",e=>{
            e.preventDefault()
            for(let i of arr){
                if(i.email == e.target.email.value && i.password == e.target.pass.value){
                    idk.style.display = "block"
                    kk.style.display = "block"
                    setTimeout(() => {
                        let p = document.createElement("p")
                        p.textContent = "You have succesfully logged in"
                        document.body.appendChild(p)
                        p.style = `
                            position:absolute;
                            top:50%;
                            left:50%;
                            z-index:99999999;
                            transform:translate(-50%,-50%);
                            color:#fff;
                        `
                        alert("You have succesfully logged in")
                    }, 1000);
                }
            }
        })