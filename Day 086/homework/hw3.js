function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let resultText = "";

    switch (operation) {
        case "+":
            resultText = "Result is: " + (num1 + num2);
            break;
        case "-":
            resultText = "Result is: " + (num1 - num2);
            break;
        case "*":
            resultText = "Result is: " + (num1 * num2);
            break;
        case "/":
            if (num2 === 0) {
                resultText = "Cannot divide by zero.";
            } else {
                resultText = "Result is: " + (num1 / num2);
            }
            break;
        default:
            resultText = "Invalid operation.";
    }

    document.getElementById("result").innerText = resultText;
}