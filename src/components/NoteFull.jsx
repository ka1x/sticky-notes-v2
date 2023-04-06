import React from 'react';
import '../styles/window.css';

const NoteFull = ({isOpened, setIsOpened, note, onDelete, setEditedNote, setIsEdited, setOpenForm}) => {
   const handleEdit = () => {
      setEditedNote(note);
      setIsEdited(true);
      setIsOpened(false);
      setOpenForm(true);
   };

   const handleDelete = () => {
      onDelete(note.id);
      setIsOpened(false);
   };

   return (
      <>
         <div className={isOpened ? 'window visible' : 'window hidden'}>
            <div className='window-content note-full'>
               <p
                  className='form-close'
                  onClick={() => setIsOpened(false)}
               >
                  <i class='fa-solid fa-xmark'></i>
               </p>

               <p className='date'>{new Date(note.date).toLocaleDateString('en-GB', {month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</p>

               <p className='title'>{note.title === '' ? 'Untitled' : note.title}</p>
               <div className='line'></div>
               <p className='content'>{note.content}</p>

               <div className='icons'>
                  <i
                     className='fa-solid fa-trash'
                     onClick={() => handleDelete()}
                  ></i>
                  <i
                     className='fa-solid fa-pen-to-square'
                     onClick={() => handleEdit()}
                  ></i>
               </div>
            </div>
         </div>
      </>
   );
};

export default NoteFull;
