import React from 'react'

function Layouts({ children }) {
  return (
    <div className='bg-white flex'>
        {children}
    </div>
  )
}

export default Layouts