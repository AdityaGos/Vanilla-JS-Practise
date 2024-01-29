export default class NotesView {
  constructor(root,{ onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {})
  {
    this.root = root;
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteDelete = onNoteDelete;

    this.root.innerHTML = `
        <div class="notes__sidebar">
        <button class="notes__add" type="button">Add Note</button>
        <div class="notes__list"></div>
    </div>
    <div class="notes__preview">
        <input class="notes__title" type="text" placeholder="New Note...">
        <textarea class="notes__body" placeholder="Take Note..."></textarea>
    </div>
      `;

    const btnAddNote = this.root.querySelector(".notes__add");
    const inpTitle = this.root.querySelector(".notes__title");
    const inpBody = this.root.querySelector(".notes__body");

    btnAddNote.addEventListener("click", () => {
      this.onNoteAdd();
    });
 
    if (inpTitle && inpBody) {
      [inpTitle, inpBody].forEach((inputField) => {
        inputField.addEventListener("blur", () => {
          const updatedTitle = inpTitle.value.trim();
          const updatedBody = inpBody.value.trim();

          this.onNoteEdit(updatedTitle, updatedBody);
        });
      });
    }

    // Hide the preview 

    this.updateNotePreviewVisibility(false);
  }

  // _ means private method

  _createListItemHTML(id, title, body, updated) {
    const MAX_BODY_LENGTH = 60;

// we are passing data and variable name as noteId . gets converted into camelCase

    return `
        <div class="notes__list-item" data-note-id="${id}">
            <div class="notes__small-title">${title}</div>
            <div class="notes__small-body">
            ${body.substr(0, MAX_BODY_LENGTH)}
            ${body.length > MAX_BODY_LENGTH ? "..." : ""}
             </div>
            <div class="notes__small-updated">${updated.toLocaleString(
              undefined,
              { dateStyle: "full", timeStyle: "short" }
            )}</div>
        </div>
            `;
  }

  updateNoteList(notes) {
    const noteListContainer = this.root.querySelector(".notes__list");

    //Empty notes list
    noteListContainer.innerHTML = "";

    for (const note of notes) {
      const html = this._createListItemHTML(
        note.id,
        note.title,
        note.body,
        new Date(note.updated)
      );
      noteListContainer.insertAdjacentHTML("beforeend", html);
    }
// Select / Delete Notes
    noteListContainer
      .querySelectorAll(".notes__list-item")
      .forEach((noteListItem) => {
        noteListItem.addEventListener("click", () => {
          const selectedNoteId =parseFloat(noteListItem.dataset.noteId)
          console.log(typeof selectedNoteId)
          this.onNoteSelect(selectedNoteId);
        });

        noteListItem.addEventListener("dblclick", () => {

            const confirmDelete = confirm("Are you sure you want to delete")
            if(confirmDelete)
            {
                this.onNoteDelete(noteListItem.dataset.noteId);
            }
        })
      });
  }

  // Update active notes

  updateActiveNote(note)
  {
    this.root.querySelector('.notes__title').value = note.title;
    this.root.querySelector('.notes__body').value = note.body;

    this.root.querySelectorAll('.notes__list-item').forEach(noteListItem=>{
        noteListItem.classList.remove('notes__list-item--selected');


    })
    // putting .before class is important
// finding the exact element with class '.notes__list-item where noteId === updatedNote.id
// then add the new css class to it using classList.add*
// const updatedNote = this.root.querySelector('')
    this.root.querySelector(`.notes__list-item[data-note-id="${note.id}"]`)?.classList.add('notes__list-item--selected');
  }

  updateNotePreviewVisibility(visible)
  {
    this.root.querySelector(`.notes__preview`).style.visibility = visible ? 'visible' : 'hidden';
  }
}
