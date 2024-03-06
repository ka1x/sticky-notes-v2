import React from 'react';
import {Note} from '..';
import './notegallery.scss';

const NoteGallery = ({notes, onEdit, onDelete, setEditedNote, setIsEdited, setOpenForm, setSeletedNote, setOpenNote}) => {
   const handleItemClick = (item) => {
      setSeletedNote(item);
      setOpenNote(true);
   };

   return (
      <>
         <div className='note-gallery'>
            {notes.length === 0 ? (
               <>
                  {' '}
                  <h2>No notes yet</h2>
               </>
            ) : (
               <>
                  <div className='content'>
                     {notes
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map((item, i) => (
                           <div
                              className='note'
                              onClick={() => handleItemClick(item)}
                              key={i}>
                              <Note note={item}></Note>
                           </div>
                        ))}
                  </div>
               </>
            )}
         </div>
      </>
   );
};

export default NoteGallery;
