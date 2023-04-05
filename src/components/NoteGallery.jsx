import React, {useState} from 'react';
import {Note, NoteFull} from '.';
import '../styles/note.css';

const NoteGallery = ({notes, onEdit, onDelete}) => {
   const [seletedNote, setSeletedNote] = useState('');
   const [openNote, setOpenNote] = useState(false);

   const handleItemClick = (item) => {
      setSeletedNote(item);
      setOpenNote(true);
   };

   return (
      <>
         <div className='note-gallery'>
            {notes.map((item, i) => (
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
            />
         </div>
      </>
   );
};

export default NoteGallery;
