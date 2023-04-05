import React from 'react';
import '../styles/note.css';

const Note = ({note}) => {


   return (
      <>
         <p>title:{note.title}</p>
         <p className="note-meta">{new Date(note.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
         {/* <p>content:{note.content}</p> */}
         <p>{note.content && note.content.length > 100 ? note.content.substr(0, 100) + '...' : note.content}</p>
      </>
   );
};

export default Note;
