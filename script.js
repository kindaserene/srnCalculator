console.log("Script is working!");

const display = document.getElementById("display");
let num1 = null;
let operator = null;
let num2 = null;

function appendToDisplay(input) {
    display.value += input;
};

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function calculate(a, op, b) {
    if (op === '+' ) {
        return add(a, b);
    } else if (op === '-' ) {
        return subtract(a, b);
    } else if (op === '*') {
        return multiply(a, b);
    } else {
        return divide(a, b);
    }
};

function clearDisplay() {
    display.value = "";
};