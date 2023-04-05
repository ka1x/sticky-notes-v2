import React from 'react';
import '../styles/note.css';

const Note = ({key, note}) => {
   return (
      <>
         <p>title:{note.title}</p>
         {/* <p>date:{note.date}</p> */}
         <p>content:{note.content}</p>
      </>
   );
};

export default Note;
