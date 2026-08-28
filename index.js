// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    // Only digits, operators, dot and parentheses may reach eval.
    if (!/^[0-9+\-*/(). ]+$/.test(display.value)) {
        display.value = "Error";
        return;
    }
    try {
        const answer = eval(display.value);
        display.value = Number.isFinite(answer) ? answer : "Error";
    } catch (error) {
        display.value = "Error";
    }
}
