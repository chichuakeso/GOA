let time = document.querySelector(".hour");
setInterval(() => {
    let date = new Date();
    let hours = date.getHours() < 10? `0${date.getHours()}` : date.getHours();
    let minutes = date.getMinutes() <10? `0${date.getMinutes()}` : date.getMinutes();
    let seconds = date.getSeconds() <10? `0${date.getSeconds()}` : date.getSeconds();
    time.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);


let colors = ["../classwork/black.png",'../classwork/red.png',"../classwork/blue.png","../classwork/pink.png"]
let btn = document.querySelector(".colors").querySelectorAll("div");
let watch = document.querySelector(".watch-img");
for(let i of btn){
    i.addEventListener("click", e=>{
        watch.style.backgroundImage = `url(${colors[Number(e.target.id)]})`;
        console.log(e.target.id);
    });
}

let click = document.querySelector(".account");
let logger = document.querySelector(".logged-in");
const confirmer = () => {
    let info = localStorage.getItem("isLogin");
    if (info) {
        logger.style.display = "flex";
        let nameUser  = JSON.parse(localStorage.getItem("user")).name;
        document.querySelector("#name").textContent = nameUser ;
        click.style.display = "none";
    } else {
        logger.style.display = "none";
        click.style.display = "flex";
    }
};
confirmer();
let buttons = document.querySelectorAll(".option-features button");
let heart = document.querySelector(".heart-rate");
buttons.forEach(button => {
    button.addEventListener("click", e => {
        heart.style.display = e.target.id === "time" ? "none" : "block";
        document.querySelector("#time").style.display = e.target.id === "time" ? "block" : "none";
    });
});
let heartRate = document.querySelector(".heart-rate p");
let heartImg = heart.querySelector("img");
setInterval(() => {
    let heartValue = Math.floor(Math.random() * 91 + 50);
    heartRate.innerHTML = heartValue;
    heartImg.style.animationDuration = heartValue < 80 ? "1.2s" : heartValue < 100 ? "0.9s" : "0.6s";
}, 2000);
let buy = document.querySelector(".buy");
let blur = document.querySelector("#blur");
let buyMenu = document.querySelector("#buy");
let buyOpen = false;
let buyClose = document.querySelector("#buy-close");
buy.addEventListener("click", () => {
    if (!JSON.parse(localStorage.getItem("isLogin"))) {
        alert("Please login to purchase");
        return;
    }
    buyMenu.style.display = buyOpen ? "none" : "block";
    blur.style.display = buyOpen ? "none" : "block";
    buyOpen = !buyOpen;
});

buyClose.addEventListener("click", () => {
    buyMenu.style.display = "none";
    blur.style.display = "none";
    buyOpen = false;
});
let buyForm = document.querySelector(".buy-menu form");
buyForm.addEventListener("submit", e => {
    e.preventDefault();
    let credNumber = e.target.cardNumb.value;
    let cvs = e.target.cvs.value;
    let phoneNumb = e.target.phoneNumb.value;
    if (credNumber.length !== 16 || cvs.length !== 3 || phoneNumb.length !== 9) {
        alert("The given Information is wrong");
    } else {
        alert("The product has been bought");
    }
    buyMenu.style.display = "none";
    buyOpen = false;
});

let regForm = document.querySelector("#register-log");
let opener = false;
click.addEventListener("click", () => {
    regForm.style.display = opener ? "none" : "block";
    blur.style.display = opener ? "none" : "block";
    opener = !opener;
});
function Account(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

let regi = regForm.querySelector(".register");
let form1 = regi.querySelector("form");
let login = document.querySelector(".login");
let users = JSON.parse(localStorage.getItem("user")) || [];
form1.addEventListener("submit", e => {
    e.preventDefault();
    let userName = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.pass.value;
    let confirmPassword = e.target.rePass.value;
    if (password !== confirmPassword || password.length < 8) {
        alert("Passwords do not match or are less than 8 characters");
        return;
    }
    if (userName.length > 7) {
        alert("User  name is too long. choose a shorter handle");
        return;
    }
    alert("Registration successful");
    const data = new Account(userName, email, password);
    users.push(data);
    localStorage.setItem("user", JSON.stringify(users));
    login.classList.add("logina");
    login.classList.remove("login");
    regi.style.display = "none";
});

let form2 = login.querySelector("form");
let accName = document.querySelector("#name");
form2.addEventListener("submit", e => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.pass.value;
    for (let user of users) {
        if (user.email === email && user.password === password) {
            localStorage.setItem("isLogin", true);
            accName.innerHTML = user.name;
            alert("Login successful");
            logger.style.display = "flex";
            click.style.display = "none";
            login.classList.add("login");
            login.classList.remove("logina");
            regForm.style.display = "none";
            blur.style.display = "none";
            return;
        }
    }
    alert("Invalid credentials");
});

let logOut = document.querySelector("#log-out");
logOut.addEventListener("click", () => {
    localStorage.setItem("isLogin", false);
    logger.style.display = "none";
    click.style.display = "flex";
    alert("Logged out successfully");
});
let alrLog = document.querySelector("#login");
alrLog.addEventListener("click", () => {
    login.classList.add("logina");
    login.classList.remove("login");
    regi.style.display = "none";
});
let wantReg = document.querySelector("#regist");
wantReg.addEventListener("click", () => {
    login.classList.add("login");
    login.classList.remove("logina");
    regi.style.display = "block";
});

