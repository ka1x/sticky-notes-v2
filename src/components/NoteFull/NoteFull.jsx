import React from 'react';
import './notefull.scss';

const NoteFull = ({isOpened, setIsOpened, note, onDelete, setEditedNote, setIsEdited, setOpenForm, clickedColor}) => {
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
         <div className={isOpened ? 'window window-visible-animate ' : 'window window-hidden-animate '}>
            <div className='note-full' style={{backgroundColor: clickedColor}}>
               <p
                  className='form-close'
                  onClick={() => setIsOpened(false)}>
                  <i className='fa-solid fa-xmark'></i>
               </p>

               <div className='header'>
                  <p className='date'>{new Date(note.date).toLocaleDateString('en-GB', {month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</p>

                  <p className='title'>{note.title === '' ? 'Untitled' : note.title}</p>
                  <div className='line'></div>
               </div>

               <p className='content'>{note.content}</p>

               <div className='icons'>
                  <i
                     className='fa-solid fa-trash'
                     onClick={() => handleDelete()}></i>
                  <i
                     className='fa-solid fa-pen-to-square'
                     onClick={() => handleEdit()}></i>
               </div>
            </div>
         </div>
      </>
   );
};

export default NoteFull;
