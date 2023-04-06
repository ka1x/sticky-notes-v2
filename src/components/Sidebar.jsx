import React from 'react'
import '../styles/sidebar.css'

const Sidebar = ({setOpenForm}) => {
  return (
	 
	 <>
	 <div className='nav'>

	  <button onClick={() => setOpenForm(true)}>add note</button>
	 </div>
	 </>
  )
}

export default Sidebar