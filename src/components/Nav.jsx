import React from 'react'
import Button from '@mui/material/Button';
const Nav = () => {
  return (
    <nav className='nav-container bg-black text-white p-5'>
        <div className="elements max-w-7xl mx-auto flex justify-between">
            <div className="logo-text">
                <p className='text-4xl'>User Name</p>
            </div>
            <div className="login-signup flex gap-4">
                <Button variant="contained">Loign</Button>
                <Button variant="outlined">Signup</Button>
            </div>
        </div>
    </nav>
  )
}

export default Nav