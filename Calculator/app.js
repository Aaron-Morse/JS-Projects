// Selectors
let display = document.querySelector('.display');
let ac = document.querySelector('.ac');

// Operator Selectors
const operators = document.querySelectorAll('.operator');
const divide = document.querySelector('.divide');
const times = document.querySelector('.times');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const equals = document.querySelector('.equals');
const plusMinus = document.querySelector('.plus-minus');
const modulo = document.querySelector('.modulo');

// Number Selectors
const numbers = document.querySelectorAll('.number');

// Variables
let total = '';
let value = '';
let symbol = '';

// Functions
const math = operator => {
    if (symbol === divide) {
        total = Number(total) / Number(value);
    }
    if (symbol === times) {
        total = Number(total) * Number(value);
    }
    if (symbol === plus) {
        total = Number(total) + Number(value);
    }
    if (symbol === minus) {
        total = Number(total) - Number(value);
    }
    value = '';
    symbol = operator;
    display.textContent = total;
}

// Listener for numbers
numbers.forEach(number => number.addEventListener('click', (e) => {
    if (ac.textContent === 'AC') {
        ac.textContent = 'C';
    }
    if(!symbol) {
        total += e.target.textContent;
        display.textContent = total;
    } else {
        value += e.target.textContent;
        display.textContent = value;
    }
}));

// Listener for operators
operators.forEach(operator => operator.addEventListener('click', (e) => {
    if (total > 0) {
        if (symbol) {
            if (symbol !== equals) {
                math(e.target);
            } 
            if (symbol === equals) {
                math(e.target);
                total = '';
                symbol = '';
            }
        } else {
            symbol = e.target;
        }
    }
}));

// Listener returns calculator to default
ac.addEventListener('click', () => {
    ac.textContent = 'AC'; // Sets AC button text back to AC from C
    display.textContent = 0; // Display text returns to 0
    total = ''; // The value variable is reset to an empty string
    value = ''; // The value variable is reset to an empty string
    symbol= ''; // The symbol variable is reset to an empty string
});


