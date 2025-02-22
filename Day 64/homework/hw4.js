/* შექმენი ორი input შეადარე ორი რიცხვი და დაბეჭდე შედეგი.*/


var num1 = prompt("enter number:")
var num2 = prompt("enter number:")


num1 = Number(num1);
num2 = Number(num2);


if (num1 > num2) {
    alert("first > second");
} else if (num1 < num2) {
    alert("first < second");
} else {
    alert("first = second");
}
