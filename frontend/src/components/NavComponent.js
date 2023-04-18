import React from 'react'
import {Link} from 'react-router-dom'
function NavComponent() {
  return (
    <div className=' bg-secondary text-light d-flex justify-space-between p-1'>
      <div className='col-6 logo text-center'>Logo</div>
      <div className='col-6 d-flex justify-content-center'>
        <div className='me-3 '><Link to="/" className='text-decoration-none text-light'>Home</Link></div>
        <div className='me-3 '><Link to="/registry" className='text-decoration-none text-light'>Registry</Link></div>
        <div><Link to="/login" className='text-decoration-none text-light'>Login</Link></div>
      </div>
    </div>
  )
}

export default NavComponent
