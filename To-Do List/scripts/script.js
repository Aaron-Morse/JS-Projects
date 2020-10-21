// SELECTORS
const input = document.querySelector('input');
const submitButton = document.querySelector('button.submit');
const clearListButton = document.querySelector('button.clear-list');
const toDoList = document.querySelector('ol');

// EVENT LISTENERS
// The submit item button to list listener
submitButton.addEventListener('click', () => {
    if (input.value) {
        addListItem();
    } else {
        alert('Please enter an item to add to your To-Do list.')
    }
});
// The submit item to list enter key listener
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value) {
        addListItem();
    }
});
// Remove single item from list listener
toDoList.addEventListener('click', (event) => {
   event.target.parentNode.parentNode
    .removeChild(event.target.parentNode);
});
// Clear entire list button event listener
clearListButton.addEventListener('click', () => {
    document.querySelectorAll('li').forEach(item => {
        item.remove();
    });
});

// FUNCTIONS
// Function that creates a new LI and inserts the input value and addes a remove button
function addListItem() {
    const li = document.createElement('li');
    li.innerHTML = `${input.value}<button class="remove">Remove</button>`;
    toDoList.appendChild(li);
    input.value = '';
}

