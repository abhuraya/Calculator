const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");

let currentInput = "0";
let firstOperand = null;
let operator = null;
let shouldResetDisplay = false;

function updateDisplay() {
    display.textContent = currentInput;
}

function appendNumber(value) {
    if (shouldResetDisplay) {
        currentInput = "0";
        shouldResetDisplay = false;
    }

    if (value === ".") {
        if (currentInput.includes(".")) {
            return;
        }

        currentInput += ".";
        updateDisplay();
        return;
    }

    if (currentInput === "0") {
        currentInput = value;
    } else {
        currentInput += value;
    }

    updateDisplay();
}

function chooseOperator(nextOperator) {
    const inputValue = Number(currentInput);

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator && !shouldResetDisplay) {
        const result = calculate(firstOperand, inputValue, operator);

        if (result === null) {
            return;
        }

        firstOperand = result;
        currentInput = formatResult(result);
        updateDisplay();
    }

    operator = nextOperator;
    shouldResetDisplay = true;
}

function calculate(firstNumber, secondNumber, selectedOperator) {
    if (selectedOperator === "+") {
        return firstNumber + secondNumber;
    }

    if (selectedOperator === "-") {
        return firstNumber - secondNumber;
    }

    if (selectedOperator === "*") {
        return firstNumber * secondNumber;
    }

    if (selectedOperator === "/") {
        if (secondNumber === 0) {
            display.textContent = "Cannot divide by zero";
            resetCalculatorState();
            shouldResetDisplay = true;
            return null;
        }

        return firstNumber / secondNumber;
    }

    return secondNumber;
}

function formatResult(value) {
    if (!Number.isFinite(value)) {
        return "Error";
    }

    return String(Number(value.toFixed(10)));
}

function handleEquals() {
    if (firstOperand === null || operator === null) {
        return;
    }

    const secondOperand = Number(currentInput);
    const result = calculate(
        firstOperand,
        secondOperand,
        operator
    );

    if (result === null) {
        return;
    }

    currentInput = formatResult(result);
    updateDisplay();

    firstOperand = null;
    operator = null;
    shouldResetDisplay = true;
}

function clearCalculator() {
    currentInput = "0";
    firstOperand = null;
    operator = null;
    shouldResetDisplay = false;
    updateDisplay();
}

function deleteLastCharacter() {
    if (shouldResetDisplay) {
        return;
    }

    if (currentInput.length <= 1) {
        currentInput = "0";
    } else {
        currentInput = currentInput.slice(0, -1);
    }

    updateDisplay();
}

function resetCalculatorState() {
    firstOperand = null;
    operator = null;
}

numberButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        appendNumber(button.dataset.value);
    });
});

operatorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        chooseOperator(button.dataset.operator);
    });
});

equalsButton.addEventListener("click", handleEquals);
clearButton.addEventListener("click", clearCalculator);
deleteButton.addEventListener("click", deleteLastCharacter);

updateDisplay();

document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!Number.isNaN(Number(key)) && key !== " ") {
        appendNumber(key);
        return;
    }

    if (key === ".") {
        appendNumber(".");
        return;
    }

    if (["+", "-", "*", "/"].includes(key)) {
        chooseOperator(key);
        return;
    }

    if (key === "Enter" || key === "=") {
        event.preventDefault();
        handleEquals();
        return;
    }

    if (key === "Backspace") {
        deleteLastCharacter();
        return;
    }

    if (key === "Escape") {
        clearCalculator();
    }
});