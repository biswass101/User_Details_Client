import React, { useEffect, useState } from 'react'
import UserInfoCart from './UserInfoCart'
import axios from 'axios'

const Admin = () => {
    const [users, setUsers] = useState('')
    useEffect(()=> {
        axios('http://localhost:5000/user')
         .then((data) => {
            setUsers(data.data.allUser)
         })
    }, [])
  return (
    <div className='user-container w-full h-[88vh] bg-slate-500'>
        <div className="user-contents max-w-7xl mx-auto  h-[inherit]">
            <div className="cart-holder w-full h-[inherit] flex flex-col items-center justify-center p-5">
              <div className='flex flex-col gap-2 p-5 min-w-[400px] overflow-y-scroll scrollbar-hide'>
                {users && users.map((user, idx) => (<UserInfoCart key={idx} {...user}/>))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Admin