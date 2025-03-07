/*შექმენით სია შეიყვანეთ user-ების სახელი და გვარი თუ user-ების სახელი და გვრი იწყება პატარა ასოთი slice-მეთოდის გამოყენებით ამოშალეთ ასეთი სახელები და გვარები სიიდან*/

let users = ["Keso Chichua", "anamaria beridze", "Elene Dvalishvili", "tekla kirtadze"];

for (let i = 0; i < users.length; i++) {

  if (users[i][0] === users[i][0].toLowerCase() && users[i].split(" ")[1][0] === users[i].split(" ")[1][0].toLowerCase()) {
    users.splice(i, 1);
    i--; 
  }
}console.log(users);

