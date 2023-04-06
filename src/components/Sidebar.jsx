import React from 'react';
import '../styles/sidebar.css';

const Sidebar = ({setOpenForm}) => {
   const handleAddclick = () => {
      setOpenForm(true);
   };

   return (
      <>
         <div className='nav'>
            <button onClick={() => handleAddclick()}>
               <i class='fa-solid fa-plus'></i>
            </button>

            <button>
               <i class='fa-solid fa-download'></i>{' '}
            </button>

            <button>
               <i class='fa-solid fa-upload'></i>{' '}
            </button>
         </div>
      </>
   );
};

export default Sidebar;
