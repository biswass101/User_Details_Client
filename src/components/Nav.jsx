import React from 'react'
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
    const navigate = useNavigate()
  return (
    <nav className='nav-container bg-black text-white p-5'>
        <div className="elements max-w-7xl mx-auto flex justify-between">
            <div className="logo-text">
                <p className='text-4xl'>User Name</p>
            </div>
            <div className="login-signup flex gap-4">
                <Link to='/login'><Button variant="contained">Loign</Button></Link>
                <Link to='/signup'><Button variant="outlined">Signup</Button></Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav