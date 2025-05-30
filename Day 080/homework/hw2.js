/* საიტზე დაამატეთ 3 ფოტო, რომლებსაც გაცენტრავთ და დიზაინის მხრივ დახვეწავთ. საიტზე მოცემული სამი ფოტოდან პირველი ორის შემთხვევაში მათზე მაუსის გადატარებისას შეიცვალოს ეს ფოტოები და კურსორის გაწევის შედეგად ისევ დაუბრუნდეს თავდაპირველ ფოტოს, ხოლო მესამე ფოტო დაჭერის შედეგად ჩაანაცვლეთ სხვა ფოტოთი, ამ შემთხვევაშიც უნდა უბრუნდებოდეს საწყის ფოტოს კურსორის გაწევის შემდეგ;*/

let image1 = document.getElementById('img1')

image1.addEventListener('mouseover', function(){
    image1.src = 'https://i.pinimg.com/736x/cd/b5/f4/cdb5f450b7ce152c887533e87708aed4.jpg'
})
image1.addEventListener('mouseout', function(){
    image1.src = 'https://i.pinimg.com/736x/ba/0a/ff/ba0affac3e8b99c99eb836ca578d4bac.jpg'   
})

let image2 = document.getElementById('img2')

image2.addEventListener('mouseover', function(){
    image2.src = 'https://i.pinimg.com/736x/ba/0a/ff/ba0affac3e8b99c99eb836ca578d4bac.jpg'
})
image2.addEventListener('mouseout', function(){
    image2.src = 'https://i.pinimg.com/736x/cd/b5/f4/cdb5f450b7ce152c887533e87708aed4.jpg'   
})

let image3 = document.getElementById('img3')

image3.addEventListener('click', function(){
    image3.src = 'https://i.pinimg.com/736x/fe/4e/b3/fe4eb3a002984f0d77b3afedd70aa9a8.jpg'
})
image3.addEventListener('mouseout', function(){
    image3.src = 'https://i.pinimg.com/736x/1b/4a/f1/1b4af1f09eb087a50c4b0ccb5e0a0b8f.jpg'   
})