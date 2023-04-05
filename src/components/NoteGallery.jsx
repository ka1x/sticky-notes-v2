import React, {useState} from 'react';

const NoteGallery = ({notes}) => {
   // const [seletedNote, setSeletedNote] = useState('');

   return (
      <>
         <div className='note-gallery'>
            {notes.map((item, i) => (
               <div
                  className='note'
                  key={i}
               >
                  <p>title:{item.title}</p>
                  <p>date:{item.date}</p>
						<p>content:{item.content}</p>
               </div>
            ))}
         </div>
      </>
   );
};

export default NoteGallery;
