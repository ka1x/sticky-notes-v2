import React from 'react';
import './note.scss';

const Note = ({note}) => {
   return (
      <>
         <div className='note-header-container'>
            <p className='note-date'>{new Date(note.date).toLocaleDateString('en-GB', {month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</p>

            <p className='note-title'>{note.title === '' ? 'Untitled' : note.title.length > 35 ? note.title.substr(0, 35) + '...' : note.title}</p>

            <div className='line'></div>
         </div>

         <div className='note-content-container'>
            {/* <p>content:{note.content}</p> */}
            <p className='note-content'>{note.content && note.content.length > 200 ? note.content.substr(0, 200) + '...' : note.content}</p>
         </div>
      </>
   );
};

export default Note;
