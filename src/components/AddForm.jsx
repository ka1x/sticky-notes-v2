import React, {useEffect, useState} from 'react';
import uuid from 'react-uuid';

import '../styles/window.css';

const AddForm = ({addNote, isOpened, setIsOpened, setEditedNote, editedNote, isEdited, setIsEdited, onEdit}) => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');

   const passEditData = () => {
      if (editedNote && isEdited) {
         setTitle(editedNote.title);
         setContent(editedNote.content);
      }
   };

   useEffect(() => {
      passEditData();
   }, [isEdited, editedNote]);

   // const handleSubmit = (e) => {
   //    e.preventDefault();

   //    if (isEdited) {
   //       const id = editedNote.id;
   //       onEdit({id, content, title});
   //    } else {
   //       //if adding new
   //       const id = uuid();
   //       addNote({id, content, title});
   //    }

   //    handleClose();
   // };
   const handleSubmit = (e) => {
      e.preventDefault();

      const note = {
         id: isEdited ? editedNote.id : uuid(),
         title,
         content,
      };

      if (isEdited) {
         onEdit(note);
      } else {
         addNote(note);
      }

      handleClose();
   };

   const handleClose = () => {
      if (isEdited) {
         setIsEdited(false);
         setEditedNote('');
      }
      setContent('');
      setTitle('');
      setIsOpened(false);
   };

   return (
      <div className={isOpened ? 'window window-visible-animate' : 'window window-hidden-animate '}>
         <div className='window-content'>
            <p
               className='form-close'
               onClick={() => handleClose()}
            >
               <i class='fa-solid fa-xmark'></i>
            </p>
            <form
               onSubmit={handleSubmit}
               className='add-note-form'
            >
               <label htmlFor='title'>Title:</label>
               <input
                  type='text'
                  id='title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />

               <label htmlFor='content'>Content:</label>
               <textarea
                  id='content'
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={10}
               ></textarea>

               <button type='submit'>{isEdited ? 'Save Changes' : 'Add Note'}</button>
            </form>
         </div>
      </div>
   );
};

export default AddForm;
