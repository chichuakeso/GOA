/*შექმენი ობიექტი სახელად student რომელსაც ექნება fullName , scores(scores-უნდა იყოს სია რადგან შეინახოთ რამდენიმე მნიშვნელობა) , ასევე ექნება ორი ფუნქცია 1)averageScore()- რომელიც გამოითცლის საშუალო ქულას , 2)checkStudent() - რომელიც გამოითლის მოსწავლის დონეს ქულების მიხედვით , თუ საშუალო ქულა იქნება 90-ზე მეტი გამოსახეთ კონსოლში შემდეგი ტექსტი ("საუკეთესო სტუდენტი")  , თუ საშუალო ქულა იქნება 90 ზე დაბალი და 60 ზე მაღალი გამოსახეთ "კარგი მოსწავლე" , ხოლო თუ საშუალო ქულა იქნება 60 ზე დაბალი გამოსახეთ "ნორმალური მოსწალე"*/

let student = {
    fullname : "kesaria chichua",
    scores : [10, 9, 10, 8],
    avarageScore(){
        let sum = 0
        let avg = sum/this.scores.length
        for(let i of this.scores){
            sum += i
        }
        return avg
    },
    checkStudent(){
        let avg = this.avarageScore()
        if(avg>90){
            console.log("the best")
        }else if(avg>60&&avg<90){
            console.log("great")
        }else if (avg<60){
            console.log("avarage")
        }
    }
}
student.avarageScore()
student.checkStudent()