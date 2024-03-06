import React from 'react';
import {Note} from '..';
import './notegallery.scss';

const noteColors = ['rgb(254, 243, 214)', '#cfc', '#ccf', 'rgb(255, 204, 204)'];

const NoteGallery = ({notes, onEdit, onDelete, setEditedNote, setIsEdited, setOpenForm, setSeletedNote, setOpenNote, setClickedColor, clickedColor}) => {
   const handleItemClick = (item, color) => {
      setClickedColor(color);
      // console.log(color);
      setSeletedNote(item);
      setOpenNote(true);
   };

   return (
      <>
         <div className='note-gallery'>
            {notes.length === 0 ? (
               <>
                  {' '}
                  <h2>No notes yet</h2>
               </>
            ) : (
               <>
                  <div className='content'>
                     {notes
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map((item, i) => {
                           const colorIndex = i % noteColors.length;
                           const backgroundColor = noteColors[colorIndex];

                           return (
                              <div
                                 className='note'
                                 onClick={() => handleItemClick(item, backgroundColor)}
                                 key={i}
                                 style={{backgroundColor: clickedColor === backgroundColor ? clickedColor : backgroundColor}}>
                                 <Note note={item}></Note>
                              </div>
                           );
                        })}
                  </div>
               </>
            )}
         </div>
      </>
   );
};

export default NoteGallery;
