import React from 'react'
import SidebarMenu from './Sidebar/SidebarMenu'

function Layouts({ children }) {
  return (
    <div className='bg-white flex'>
        {children}
    </div>
  )
}

export default Layouts