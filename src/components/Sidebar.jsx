import React from 'react'
import '../styles/sidebar.css'

const Sidebar = ({setOpenForm}) => {
  return (
	 
	 <>
	  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg> 
	 <div className='nav'>

	  <button onClick={() => setOpenForm(true)}>add note</button>
	 </div>
	 </>
  )
}

export default Sidebar