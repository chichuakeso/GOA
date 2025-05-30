/*დაწერეთ JavaScript-ის პროგრამა რომელიც დაითვლის სიაში ელემენტების რაოდენობას, შედეგი გამოიტანეთ კონსოლში*/

let items = [1, 2, 3, 4, 5, 6, 7, 8];

let count = 0;

for (let i = 0; i < items.length; i++) {
  count++;
}

console.log(count);