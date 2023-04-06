import React from 'react';
import '../styles/add-form.css';

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
            <div className='window-content'>
               <p onClick={() => setIsOpened(false)}>X</p>
               <p>title:{note.title}</p>
               <p>content:{note.content}</p>

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
      </>
   );
};

export default NoteFull;
