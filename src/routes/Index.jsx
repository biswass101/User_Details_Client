import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Nav from '../components/Nav'
import Signup from '../components/Signup'
import UserProfile from '../components/UserProfile'
const Index = () => {
  return (
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='/signup' element = {<Signup/>}/>
            <Route path='/profile' element = {<UserProfile/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Index