// SELECTORS
const textarea = document.querySelector('textarea');
const addNoteButton = document.querySelector('button.add-note');
const notesContainer = document.querySelector('div.notes-container');
const modal = document.querySelector('div.modal');
const modalContent = document.querySelector('div.modal-content');
let notesList = [];

// EVENT LISTENERS
addNoteButton.addEventListener('click', () => {
    if (textarea.value) {
        addNote();
    } else {
        alert(`Don't forget to add your note!`);
    }
});

notesContainer.addEventListener('click', (e) => {
    if (e.target.className === 'view-detail') {
        viewModal(e);
    }
});

modal.addEventListener('click', closeModal);

// FUNCTIONS
// Adds the textarea as a note to the notes container
function addNote() {
    // Creates the div that stores the note from the textarea
    const note = document.createElement('DIV');
    note.className = 'note';
    // Pushes the note to the notes array
    notesList.push(textarea.value);
    note.innerHTML = `<p>Note ${notesList.length}</p><p>${textarea.value}</p>`;
    notesContainer.appendChild(note);
    // Create the view detail button and append to note
    const button = document.createElement('BUTTON');
    button.className = 'view-detail';
    button.innerHTML = 'View Detail';
    note.appendChild(button);
    // Clear text area
    textarea.value = '';

}

// Generates the modal with the corresponding note text
function viewModal(e) {
    const i = Number(e.target.parentNode.firstElementChild.textContent.split(' ').filter(x => x % 1 === 0));
    modal.style.display = 'flex';
    modalContent.innerHTML = `<p class="close-modal">x</p><p>${notesList[i - 1]}</p>`;
}

function closeModal(e) {
    if (e.target.className === 'close-modal') {
        modal.style.display = 'none';
    }
}



