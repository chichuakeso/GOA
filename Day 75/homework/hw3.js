/*შექმენით ობიექტი user , ამ ობიექტში შეინახე შესაბამისი key-ები , for in - ციკლის  გამოყენებით გადაუარე თითოეულ key-ს და გამოსახე console-ში*/

let user = {
    name : "keso",
    surename : "chichua",
    age : 16,
    height : 170
}

for (let i in user){
    console.log(i,user[i])
}

console.log(user)