/*შექმენით ობიექტი car , რომელსაც ექნება 5 key -  company(მწარმოებელი) , model , milage ,year , condition , ამ ობიექტში ასევე უნდა იყოს შენახული ფუნქცია , ამ ფუნქციას პარამეტრად ჰქონდეს condition ,და ამ ფუნქციაში შეამოწმეთ , რომ თუ condition-არის კარგი ან ცუდი დაბეჭდეთ შემდეგი ტექსტი car is in {condition} condition გამოიყენეთ format-ი*/

let carInfo = {
    model : "toyota",
    milage : 12000,
    year : 2020,
    condition : "good",
    carCondition(carCondition){
        return `car is in ${carCondition} condition`
    }
}
console.log(carInfo.carCondition(carInfo.condition))

/*არსებულ car ობიექტს , ობიექტის გარედან დაამატეთ color  და price  , ასევე ამოშალეთ milage , შემდეგ ყველაფერი გამოსახეთ console-ში */

carInfo.color = "blue"
carInfo.price = 30000
delete carInfo.milage
console.log(carInfo)