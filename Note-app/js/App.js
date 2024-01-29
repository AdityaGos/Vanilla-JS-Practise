import NotesView from "./NotesView.js";
import NotesAPI from "./NotesAPI.js"
export default class App
{
    constructor(root)
    {
        this.root = root;
        this.notes = [];
        this.activeNote= null;
        this.view = new NotesView(root,this._handlers())
        this._refreshNotes()
    }

    _refreshNotes()
    {
        const notes = NotesAPI.getAllNotes()

        this._setNotes(notes)
        if(notes.length>0 )
            {
                this._setActiveNotes(notes[0])
            }
    }

    _setNotes(notes)
    {
        this.notes = notes;
        this.view.updateNoteList(notes)
        this.view.updateNotePreviewVisibility(notes.length> 0)

    }
    _setActiveNotes(note)
    {
        this.activeNote =note;
        this.view.updateActiveNote(note)
       
    }
    _handlers(){

        return{

            onNoteSelect :noteId =>{
        
                const selectedNote = this.notes.find((note)=> {return note.id ==noteId})
                this._setActiveNotes(selectedNote)
                
            },
            onNoteAdd :() =>{
               const newNote={
                title:"",
                body:""
               }
               NotesAPI.saveNotes(newNote)
               this._refreshNotes();
            },

            onNoteEdit :(title,body) =>{
               NotesAPI.saveNotes({
                id:this.activeNote.id,
                title,
                body,
               })

               this._refreshNotes();
            },
            onNoteDelete :noteId =>{
                NotesAPI.deleteNotes(noteId);
                this._refreshNotes();
            },
        }
    }
}