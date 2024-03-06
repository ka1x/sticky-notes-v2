import {useEffect, useState} from 'react';
import {AddForm, NoteGallery, Background, Sidebar, NoteFull} from './components';

function App() {
   const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);

   const [openForm, setOpenForm] = useState(false);

   const [isEdited, setIsEdited] = useState(false);
   const [editedNote, setEditedNote] = useState('');

   const [seletedNote, setSeletedNote] = useState('');
   const [openNote, setOpenNote] = useState(false);
   const [clickedColor, setClickedColor] = useState(null);

   const [darkMode, setDarkMode] = useState(false);

   // saving in local storgae
   useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes));
   }, [notes]);

   //creating note to add
   const createNote = (item) => {
      const newNote = {
         title: item.title,
         content: item.content,
         date: isEdited ? editedNote.date : new Date(),
         id: item.id,
      };

      return newNote;
   };

   // adds new note to notes
   const addNote = (item) => {
      const newNote = createNote(item);
      setNotes([newNote, ...notes]);
   };

   //delete item
   const deleteNote = (id) => {
      if (window.confirm('Are you sure you want to delete this note?')) {
         setNotes(notes.filter((note) => note.id !== id));
      }
   };

   // edit item
   const editNote = (item) => {
      const newNote = createNote(item);
      const updatedNotews = notes.filter((a) => a.id !== item.id);
      setNotes([...updatedNotews, newNote]);
   };

   return (
      <>
         {' '}
         <div className={darkMode ? 'dark-mode' : ''}>
            <Background />

            <Sidebar
               setOpenForm={setOpenForm}
               setDarkMode={setDarkMode}
               darkMode={darkMode}
               setNotes={setNotes}
            />

            <AddForm
               addNote={addNote}
               isOpened={openForm}
               setIsOpened={setOpenForm}
               setEditedNote={setEditedNote}
               editedNote={editedNote}
               isEdited={isEdited}
               setIsEdited={setIsEdited}
               onEdit={editNote}
            />
            <NoteGallery
               notes={notes}
               onEdit={editNote}
               onDelete={deleteNote}
               setEditedNote={setEditedNote}
               setIsEdited={setIsEdited}
               setOpenForm={setOpenForm}
               setSeletedNote={setSeletedNote}
               setOpenNote={setOpenNote}
               setClickedColor={setClickedColor}
               clickedColor={clickedColor}
            />

            <NoteFull
               isOpened={openNote}
               setIsOpened={setOpenNote}
               note={seletedNote}
               onEdit={editNote}
               onDelete={deleteNote}
               setEditedNote={setEditedNote}
               setIsEdited={setIsEdited}
               setOpenForm={setOpenForm}
               clickedColor={clickedColor}
            />
         </div>
      </>
   );
}

export default App;
