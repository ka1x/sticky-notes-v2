import React, {useRef} from 'react';
import {saveAs} from 'file-saver';
import '../styles/sidebar.css';

const Sidebar = ({setOpenForm, darkMode, setDarkMode, setNotes}) => {
   const handleAddclick = () => {
      setOpenForm(true);
   };

   const handleDeleteAlll = () => {
      if (window.confirm('Are you sure you want to delete ALL notes?')) {
         setNotes([]);
      }
   };

   const exportDataToFile = () => {
      const data = localStorage.getItem('notes');
      const blob = new Blob([JSON.stringify(data)], {type: 'application/json'});
      saveAs(blob, 'notes.json');
   };

   //importing data from file
   const fileInputRef = useRef(null);

   const handleFileChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
         const data = JSON.parse(e.target.result);
         setNotes(JSON.parse(data));
         fileInputRef.current.value = '';
      };
      reader.readAsText(file);
   };

   const handleImportClick = () => {
      if (window.confirm('Do you want to import notes? This will replace any existing notes')) {
         fileInputRef.current.click();
      }
   };

   return (
      <>
         <div className='nav'>
            <button onClick={() => handleAddclick()}>
               <i class='fa-solid fa-plus'></i>
            </button>

            <button onClick={() => handleDeleteAlll()}>
               <i class='fa-solid fa-trash'></i>{' '}
            </button>

            {/* <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <i class='fa-solid fa-sun'></i> : <i class='fa-solid fa-moon'></i>}</button> */}

            <button onClick={() => exportDataToFile()}>
               <i class='fa-solid fa-download'></i>
            </button>

            <input
               type='file'
               ref={fileInputRef}
               style={{display: 'none'}}
               onChange={handleFileChange}
            />
            <button onClick={() => handleImportClick()}>
               <i class='fa-solid fa-upload'></i>
            </button>
         </div>
      </>
   );
};

export default Sidebar;
