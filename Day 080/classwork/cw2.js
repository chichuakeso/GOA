/* დაამატეთ საიტზე ფოტო, რომელზე მაუსის გადატარებისას, უნდა შეიცვალოს ეს ფოტო. მაუსის გაწევისას კი დაუბრუნდეს ისევ საწყის ფოტოს.
*/

let img = document.getElementById('img')
img.style.width = '300px'

img.addEventListener('mouseover', function(){
    img.src = 'https://i.pinimg.com/736x/79/d5/f6/79d5f63588c4402424154d7b73afaf09.jpg';
})
img.addEventListener('mouseleave', function(){
    img.src = 'https://i.pinimg.com/736x/16/a4/22/16a422a02a444bc0413538a9761f78fc.jpg';
})