/*საიტზე დაამატეთ ტექსტი. გაუწერეთ მას Javascript-ის კოდი ისე, რომ ტექსტზე დაჭერისას შეიცვალოს იგი და ეკრანზე მის ნაცვლად გამოვიდეს ახალი წინადადება;*/

let lol = document.getElementById("h1")

function change(){
    lol.style.color = "blue"
    lol.textContent = "i still dont know what to write here"
}
lol.addEventListener('click', change)