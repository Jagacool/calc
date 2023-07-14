// Calculator logic
var display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function calculate() {
    var expression = display.value;
    try {
        var result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}

// Keyboard event handling
document.addEventListener("keydown", function(event) {
    var key = event.key;
    if (/[0-9+\-*/%=]/.test(key)) {
        event.preventDefault();
        if (key === "=" || key === "Enter") {
            calculate();
        } else if (key === "Escape") {
            clearDisplay();
        } else {
            display.value += key;
        }
    } else {
        alert("Only numbers and operators are allowed.");
    }
});
