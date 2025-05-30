/*საიტზე დაამატეთ ერთი ფოტო. მასზე დაჭერის შედეგად უნდა იცვლებოდეს იგი მეორე ფოტოთი, ხოლო მეორე ფოტოზე მაუსის გადატარების შემთხვევაში ისიც უნდა ჩანაცვლდეს ამჯერად კიდევ განსხვავებული მესამე ფოტოთი. მესამე ფოტოზე კიდევ ერთხელ დაჭერა უნდა იწევევდეს თავდაპირველი ფოტოს დაბრუნებას;
*/

let image1 = document.getElementById('img1')

image1.addEventListener('mouseover', function(){
    image1.src = 'https://i.pinimg.com/736x/cd/b5/f4/cdb5f450b7ce152c887533e87708aed4.jpg'
})
image1.addEventListener('click', function(){
    image1.src = 'https://i.pinimg.com/736x/1b/4a/f1/1b4af1f09eb087a50c4b0ccb5e0a0b8f.jpg'   
})
image1.addEventListener('mouseleave', function(){
    image1.src = 'https://i.pinimg.com/736x/ba/0a/ff/ba0affac3e8b99c99eb836ca578d4bac.jpg'   
})