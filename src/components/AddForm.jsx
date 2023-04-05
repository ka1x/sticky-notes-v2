import React, {useState} from 'react';
import uuid from 'react-uuid';

import '../styles/add-form.css';

const AddForm = ({addNote, isOpened, setIsOpened}) => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      //if adding new
      const date = new Date();
      const id = uuid();
      addNote({id, date, content, title});

      setIsOpened(false)
   };

   return (
      <div className={isOpened ? 'window visible' : 'window hidden'}>
         <p onClick={()=>setIsOpened(false)}>X</p>
         <>
            <form
               onSubmit={handleSubmit}
               className='add-form'
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

               <input
                  type='submit'
                  value='submit'
               />
            </form>
         </>
      </div>
   );
};

export default AddForm;
