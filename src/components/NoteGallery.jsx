import React, {useState} from 'react';
import {Note, NoteFull} from '.';
import '../styles/note.css';

const NoteGallery = ({notes, onEdit, onDelete, setEditedNote, setIsEdited, setOpenForm}) => {
   const [seletedNote, setSeletedNote] = useState('');
   const [openNote, setOpenNote] = useState(false);

   const handleItemClick = (item) => {
      setSeletedNote(item);
      setOpenNote(true);
   };


   return (
      <>
         <div className='note-gallery'>
            {notes
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((item, i) => (
               <div
                  className='note'
                  onClick={() => handleItemClick(item)}
                  key={i}
               >
                  <Note note={item}></Note>
               </div>
            ))}

            <NoteFull
               isOpened={openNote}
               setIsOpened={setOpenNote}
               note={seletedNote}
               onEdit={onEdit}
               onDelete={onDelete}
               setEditedNote={setEditedNote}
               setIsEdited={setIsEdited}
               setOpenForm={setOpenForm}
            />
         </div>
      </>
   );
};

export default NoteGallery;
