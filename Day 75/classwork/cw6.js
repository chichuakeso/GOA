/*შექმენით ქვემოთ მოცემული ობიექტის მსგავსი ობიექტი თქვენს სასურველ მანქანაზე და დაამატეთ ფუნქცია CarFullInfo, რომლის გამოძაღებაზეც გამოიტანს მთლიან ინფორმაციას მანქანაზე(აუცილებლად გამოიყენეთ string formatting)*/
/*idk anything abt cars so i'll use the same info*/

const carInfo = {
    brand: "Toyota",
    model : "Camry",
    year : 2021,
    color : "DarkBlue",
    isElectric : false,
    carFullInfo(){
        return `the brand is ${this.brand}, the model is ${this.model}, the year it was released is ${this.year}, the color is ${this.color}, the car being electric is ${this.isElectric}`
    }
}
console.log(carInfo.carFullInfo())