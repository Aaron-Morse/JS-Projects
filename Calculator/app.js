// Selectors
let display = document.querySelector('.display');
let ac = document.querySelector('.ac');
const calculator = document.querySelector('.calculator');

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
    if (symbol === modulo) {
        total = Number(total) % Number(value);
    }
    value = '';
    symbol = operator;
    display.textContent = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
}

// Listener returns calculator to default
ac.addEventListener('click', () => {
    if (!value) { // Only clears all if there isn't a number in the value var, otherwise it clears everything
        ac.textContent = 'AC'; // Sets AC button text back to AC from C
        display.textContent = 0; // Display text returns to 0
        total = ''; // The value variable is reset to an empty string
        value = ''; // The value variable is reset to an empty string
        symbol= ''; // The symbol variable is reset to an empty string
    } else {
        ac.textContent = 'AC'; // Sets AC button text back to AC from C
        display.textContent = 0; // Display text returns to 0
        value = ''; // The value variable is reset to an empty string
    }
});

// Listener for numbers to append to appropriate variable for computation and AC button
numbers.forEach(number => number.addEventListener('click', (e) => {
    if(!symbol) {
        if (e.target.textContent !== '0' && total === '' || total > 0) { // Conditional disables the use of the 0 button until something great than 0
            if (display.textContent.length < 11) { // Conditional disables numbers based on display length
                total += e.target.textContent;
                display.textContent = total.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    }
    else {
        if (e.target.textContent !== '0' && value === '' || value > 0) { // Conditional disables the use of the 0 button until something great than 0
            if (display.textContent.length < 11 || value === '') { // Conditional disables numbers based on display length
                value += e.target.textContent;
                display.textContent = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    }
    if (ac.textContent === 'AC' && total !=='') { // Checks to see if the AC button contains AC and total isn't blank and switches to C
        ac.textContent = 'C';
    }
}));

// Listener for operators to run math function to compute the problems
operators.forEach(operator => operator.addEventListener('click', (e) => {
    if (total) {
        if (symbol) {
            if (symbol !== equals) {
                math(e.target);
            } 
            if (symbol === equals) {
                math(e.target);
                symbol = '';
            }
        } else {
            symbol = e.target;
        }
    }
}));

// Listener for Plus-Minus button
plusMinus.addEventListener('click', () => {
    if (total > 0 && value === '') {
        total = '-' + total;
        display.textContent = total.replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
    }
    else if (total < 0 && value === '') {
        total = total.slice(1);
        display.textContent = total.replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
    }
    else if (value > 0) {
        value = '-' + value;
        display.textContent = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
    }
    else if (value < 0) {
        value = value.slice(1);
        display.textContent = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
    }
});

// Event listener to adjust the displays sizing and padding based on display content length
calculator.addEventListener('click', () => {
    const len = display.textContent.length;
    if (len < 7) {
        display.style.fontSize = '95px';
        display.style.padding = '0 20px 5px 0';
    }
    if (len > 7 && len < 10) {
        display.style.fontSize = '80px';
        display.style.padding = '0 15px 5px 0';
    }
    if (len >= 10 && len < 11) {
        display.style.fontSize = '70px';
        display.style.padding = '0 13px 5px 0';
    }
    if (len >= 11) {
        display.style.fontSize = '62.5px';
        display.style.padding = '0 10px 5px 0';
    }
});