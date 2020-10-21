// SELECTROS
const nameInput = document.querySelector('input[id="name"]');
const dateInput = document.querySelector('input[id="date"]');
const amountInput = document.querySelector('input[id="amount"]');
const table = document.querySelector('table.expense-table');
const expenseButton = document.querySelector('button.add-expense');


// EVENT LISTENERS
// Add item to expense table button listener
expenseButton.addEventListener('click', () => {
    if (nameInput.value && dateInput.value && amountInput.value) {
        addExpenseItem();
    } else {
        alert('Please fill out all expense item values.');
    }
});

// Add item to expense table with the enter key listener
table.addEventListener('click', event => {
    if (event.target.nodeName === 'BUTTON') {
        event.target.parentElement.parentElement.parentElement
            .removeChild(event.target.parentElement.parentElement);
    }
});

// Remove expense item from table button listener
document.addEventListener('keydown', event => {
    if (event.key === 'Enter' && nameInput.value && dateInput.value && amountInput.value) addExpenseItem();
});

//  FUNCTIONS
function addExpenseItem() {
    // Creates a new table row element and adds the table data with corresponding input values
    const expenseItem = document.createElement('tr');
    expenseItem.innerHTML = `<td>${nameInput.value}</td><td>${dateInput.value}</td><td>$${Number(amountInput.value).toFixed(2)}</td><td><button>x</button></td>`;
    // Appends the newly created table row to the table
    table.appendChild(expenseItem);
}
