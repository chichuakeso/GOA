/*შექმენით ფუნქცია რომელიც სიიდან ამოიღებს ყველა ელემენტს და დააბრუნებს ახალ სიას სადაც მხოლოდ 5 სიმბოლოზე მეტი სიტყვები მოხვდებიან*/

let list = ["one","two","three","four", "five"]
        let list2 = list.map(element =>{
            if(element.length >=5){
                return element
            }
        })
        console.log(list2)