console.log("Script is working!");

const display = document.getElementById("display");
let num1 = null;
let operator = null;
let num2 = null;
let waitNum2 = false;

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } 

    else if (key === '+') {
        handleOperator('+');
    }
    else if (key === '-') {
        handleOperator('-');
    } 
    else if (key === '*') {
        handleOperator('*');
    } 
    else if (key === '/') {
        handleOperator('/');
    }

    else if (key === 'Enter' || key === '=') {
        calculate();
    }
    else if (key === '.') {
        appendToDisplay('.');
    }
    else if (key === 'Delete') {
        clearDisplay();
    }
    else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
}
)

function appendToDisplay(input) {
    if (input === '.' && display.value.includes('.')) {
        return;
    }
    if (waitNum2 === false) {
        display.value += input;
    } else {
        clearDisplay();
        waitNum2 = false;
        display.value += input;                
    }
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

function calculate() {
    if (num1 !== null && operator !== null && display.value !== "") {
        num2 = Number(display.value);
        let res;

        if (operator === '+' ) {
            res = add(num1, num2);
        } else if (operator === '-' ) {
            res = subtract(num1, num2);
        } else if (operator === '*') {
            res = multiply(num1, num2);
        } else {
            res = divide(num1, num2);
        }

        display.value = res;

        // Add flash effect when display result
        display.classList.add('flash');
        setTimeout(() => {
            display.classList.remove('flash');
        }, 200);

        num1 = null;
        num2 = null;
        operator = null;
    } else if (num1 === null && operator === null) {
        display.value = "";
    }
};

function clearDisplay() {
    display.value = "";
};

function handleOperator(op) {
    if (num1 !== null && operator !== null && display.value !== "") {
        calculate()        
        num1 = Number(display.value);
    } else {
        num1 = Number(display.value);        
    }
    operator = op;
    waitNum2 = true;
}

