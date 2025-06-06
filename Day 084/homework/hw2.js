/*ჩართეთ თქვენი ფანტაზია და ნასწავლი მასალის გამოყენებით შექმენით რაიმე საინტერესო და ლამაზი*/

const box = document.querySelector('.box');
const scoreEl = document.getElementById('score');
let score = 0;

function moveBox() {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    box.style.left = x + 'px';
    box.style.top = y + 'px';
}

box.addEventListener('click', function() {
    score++;
    scoreEl.textContent = score;
    moveBox();
});

moveBox();