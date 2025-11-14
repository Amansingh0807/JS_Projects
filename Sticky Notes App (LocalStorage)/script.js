document.addEventListener('DOMContentLoaded', () => {
    const notesContainer = document.getElementById('notes-container');
    const addNoteBtn = document.getElementById('add-note-btn');

    function getNotes() {
        return JSON.parse(localStorage.getItem('stickynotes-notes') || '[]');
    }

    function saveNotes(notes) {
        localStorage.setItem('stickynotes-notes', JSON.stringify(notes));
    }

    function createNoteElement(id, content) {
        const note = document.createElement('div');
        note.classList.add('note');
        note.innerHTML = `
            <textarea placeholder="Empty sticky note">${content}</textarea>
            <button class="delete-btn">X</button>
        `;

        const deleteBtn = note.querySelector('.delete-btn');
        const textarea = note.querySelector('textarea');

        deleteBtn.addEventListener('click', () => {
            deleteNote(id, note);
        });

        textarea.addEventListener('input', () => {
            updateNote(id, textarea.value);
        });

        return note;
    }

    function addNote() {
        const notes = getNotes();
        const noteObject = {
            id: Date.now(),
            content: ''
        };
        const noteElement = createNoteElement(noteObject.id, noteObject.content);
        notesContainer.appendChild(noteElement);
        notes.push(noteObject);
        saveNotes(notes);
    }

    function updateNote(id, newContent) {
        const notes = getNotes();
        const targetNote = notes.find(note => note.id == id);
        if (targetNote) {
            targetNote.content = newContent;
            saveNotes(notes);
        }
    }

    function deleteNote(id, noteElement) {
        const notes = getNotes().filter(note => note.id != id);
        saveNotes(notes);
        notesContainer.removeChild(noteElement);
    }

    addNoteBtn.addEventListener('click', addNote);

    getNotes().forEach(note => {
        const noteElement = createNoteElement(note.id, note.content);
        notesContainer.appendChild(noteElement);
    });
});
