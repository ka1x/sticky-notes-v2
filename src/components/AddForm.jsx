import React, {useState} from 'react';
import uuid from 'react-uuid';

import '../styles/add-form.css'


const AddForm = ({addNote}) => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      //if adding new
      const date = new Date();
      const id = uuid();
      addNote({id, date, content, title});
   };

   return (
      <>
         <form
           onSubmit={handleSubmit}
            className='add-form window'
         >
            <input
               type='text'
               name='title'
               id='title'
               onChange={(e) => setTitle(e.target.value)}
               value={title}
            />
            <textarea
               name='content'
               id='content'
               cols='30'
               rows='10'
               value={content}
               onChange={(e) => setContent(e.target.value)}
            ></textarea>

				<input type="submit" value="submit" />
         </form>
      </>
   );
};

export default AddForm;
