/*შექმენით სია სადაც იქნება user-ების სახელი და გვარი და ახალ სიაში დაამატეთ ამ იუსერების  ინიციალები სახელის და გვარის პირველი ასოები, მაგალითად: გიორგი ბიბილაშვილი -> გ.ბ*/

let names = ["keso chichua", "tamar partenadze"]

let initials = []
for(let i = 0; i < names.length; i++){
    let name = names[i].split(" "); 
    let initial = name[0][0] + "." + name[1][0]; 
    initials.push(initial);
} console.log(initials)