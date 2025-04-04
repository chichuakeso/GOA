/*შექმენით სარეგისტრაციო ვებ-საიტი, რომელიც დიზაინის მხრივ მაქსიმალურად დახვეწავთ. მომხმარებელს Input ველებში შემოატანინეთ Email, Password და კიდევ ერთხელ გაამეორებინეთ Password, აუცილებლად დაამატეთ Submit ღილაკიც. გაიხსენეთ ფუნქცია, რომელიც გაკვეთილზე გავაკეთეთ და თქვენით დაამატეთ მსგავსი ფუნქციონალი თქვენს სარეგისტრაციო საიტზე. იმ შემთხვევაში თუ შეყვანილი პაროლი და გამეორებული პაროლი არ ემთხვევა ერთმანეთს alert box-ში გამოიტანეთ "Passwords do not match eachother. Try again.", თუ ორივე პაროლის შესაყვანი ველი ცარიელი იქნება გამოიტანეთ "Input fields cannot be empty.", ხოლო იმ შემთხვევაში თუ  შეყვანილი პაროლი და გამეორებული პაროლი ემთხვევა ერთმანეთს alert box-ში "Your login was successful" გამოიტანეთ;*/


let email = document.querySelector('#email');
let password1 = document.querySelector('#password1');
let password2 = document.querySelector('#password2');

function check() {
    if (email.value === '' || password1.value === '' || password2.value === '') {
        alert("Input fields cannot be empty.");
        return; 
    }
    if (password1.value !== password2.value) {
        alert("Passwords do not match each other. Try again.");
        return;  
    }
    alert('Your login was successful');
}