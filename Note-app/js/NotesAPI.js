export default class NotesAPI {
  static getAllNotes() {
    const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

    return notes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }

  static saveNotes(notesToSave) {
    const notes = NotesAPI.getAllNotes();

    const existingNotes = notes.find((note) => note.id === notesToSave.id);

    // Edit / Update notes

    if (existingNotes) {
      existingNotes.title = notesToSave.title;
      existingNotes.body = notesToSave.body;
      existingNotes.updated = new Date().toISOString();
    } else {
      notesToSave.id = notesToSave.id || Math.floor(Math.random() * 100000);
      notesToSave.updated = new Date().toISOString();
      notes.push(notesToSave);
    }

    localStorage.setItem("notesapp-notes", JSON.stringify(notes));
  }

  static deleteNotes(notes_id) {
    const notes = NotesAPI.getAllNotes();
    const filteredNotes = notes.filter((note) => note.id !== notes_id);
    localStorage.setItem("notesapp-notes", JSON.stringify(filteredNotes));
  }
}
