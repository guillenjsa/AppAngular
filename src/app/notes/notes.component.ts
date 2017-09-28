import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html'
})

export class NotesComponent {

  notes_db: FirebaseListObservable<any[]>;
  note = {id : null, title : null, body : null};
  show_form = false;
  edit = false;
  notes: any;

  constructor(public db: AngularFireDatabase) {
    this.getNotes().subscribe(notes_db => (this.notes = notes_db));
  }

  getNotes() {
    return this.db.list('/notas');
  }

  showForm() {
    this.show_form = true;
  }

  hideForm() {
    this.show_form = false;
    this.edit = false;
    this.note = {id : null, title : null, body : null};
  }

  addNote() {
    if (this.edit) {
      this.db.database.ref('notas/' + this.note.id).set(this.note);
    } else {
      this.note.id = Date.now();
      this.db.database.ref('notas/' + this.note.id).set(this.note);
    }
    this.hideForm();
  }

  editNote(i) {
    // this.note = note;
    // this.showForm();
    this.edit = true;
  }

  deleteNote(i) {
    this.db.database.ref('notas/' + this.note.id).remove();
    this.hideForm();
  }

}
