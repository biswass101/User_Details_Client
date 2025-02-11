import React, { useState } from 'react'
import UserProfile from './UserProfile'

const Hero = () => {
    const [test, setTest] = useState(false)
  return (
    <main className='w-full h-[88.68vh] bg-slate-800 text-white flex justify-center items-center'>
        <div className="user-details max-w-4xl">
            {
                test?
                <p className='text-4xl'>User Not Logged in</p>:
                <UserProfile/> 
            }
        </div>
    </main>
  )
}

export default Hero