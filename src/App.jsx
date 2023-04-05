import {useEffect, useState} from 'react';
import {AddForm, NoteGallery} from './components';

function App() {
   const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);

   // saving in local storgae
   useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes));
   }, [notes]);

   //creates new note
   const createNew = (item) => {
      const newNote = {
         title: item.title,
         content: item.content,
         date: item.date,
         id: item.id,
      };
      return newNote;
   };

   // adds new note to notes
   const addNote = (item) => {
      const newNote = createNew(item);
      setNotes([newNote, ...notes]);
   };

   //delete item
   const deleteNote = (id) => {
      if (window.confirm('Are you sure you want to delete this note?')) {
         setNotes(notes.filter((note) => note.id !== id));
      }
   };

   // edit item
   const onEdit = (item) => {
      const newNote = createNew(item);
      const updatedNotews = notes.filter((a) => a.id !== item.id);
      setNotes([...updatedNotews, newNote]);
   };

   return (
      <>
         <AddForm addNote={addNote} />
          <NoteGallery notes={notes}/>
      </>
   );
}

export default App;
