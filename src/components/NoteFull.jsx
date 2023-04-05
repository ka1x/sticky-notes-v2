import React from 'react';
import '../styles/add-form.css';

const NoteFull = ({isOpened, setIsOpened, note, onEdit, onDelete}) => {
   const handleDelete = () => {
      onDelete(note.id);
      setIsOpened(false);
   };

   return (
      <>
         <div className={isOpened ? 'window visible' : 'window hidden'}>
            <p onClick={() => setIsOpened(false)}>X</p>
            <p>title:{note.title}</p>
            <p>content:{note.content}</p>

            <i
               className='fa-solid fa-trash'
               onClick={() => handleDelete()}
            ></i>
            <i className='fa-solid fa-pen-to-square'></i>
         </div>
      </>
   );
};

export default NoteFull;
