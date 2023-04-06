import React from 'react';
import '../styles/sidebar.css';

const Sidebar = ({setOpenForm, darkMode, setDarkMode}) => {
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
               <i class='fa-solid fa-trash'></i>{' '}
            </button>

            <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <i class='fa-solid fa-sun'></i> : <i class='fa-solid fa-moon'></i>}</button>
         </div>
      </>
   );
};

export default Sidebar;
