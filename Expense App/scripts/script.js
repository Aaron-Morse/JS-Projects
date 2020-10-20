const name = document.querySelector('input[id="name"]');
const date = document.querySelector('input[id="date"]');
const amount = document.querySelector('input[id="amount"]');
const table = document.querySelector('table.expense-table');
const expenseButton = document.querySelector('button.add-expense');

function tableRow() {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `<td>${name.value}</td><td>${date.value}</td><td>$${Number(amount.value).toFixed(2)}</td><td><button>x</button></td>`;
    table.appendChild(tableRow);
}

expenseButton.addEventListener('click', () => {
    tableRow();
});

table.addEventListener('click', event => {
    event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
});

document.addEventListener('keydown', event => {
    if (event.key === 'Enter' && name.value && date.value && amount.value) {
        tableRow();
    }
})

