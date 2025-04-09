let words = {
    "Hello": {
        "georgian": "გამარჯობა",
        "english": "Hello",
        "french": "Bonjour"
    },
};

let word = "Hello";  

function translateWord() {
    let language = document.getElementById('languageInput').value;
    let result = document.getElementById('result');

    if (language in words[word]) {
        result.innerText = words[word][language];
    } else {
        result.innerText = "try a different language.";
    }
}