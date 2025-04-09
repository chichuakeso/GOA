/*დღეს ახსნილი მასალის გამოყენებით გააკეთეთ, საიტზე მოძრავი ელემენტი კლავიატურის ისრების საშუალებით, შექმენით ერთი ელემენტი რომლის საიტზე ჰორიზონტალურადაც და ვერტიკალურადაც ამოძრავებას შეძლებთ, ისრების გამოყენებით ,  ასევე დაამატეთ სტილი რათა იყოს ლამაზი და smooth*/

const box = document.querySelector('.box');

let x = 100;
let y = 100;

document.addEventListener('keydown', function(move) {
    if (move.key === 'ArrowRight') {
        x += 20;
    } else if (move.key === 'ArrowLeft') {
        x -= 20;
    } else if (move.key === 'ArrowUp') {
        y -= 20;
    } else if (move.key === 'ArrowDown') {
        y += 20;
    }

    box.style.left = x + 'px';
    box.style.top = y + 'px';
})