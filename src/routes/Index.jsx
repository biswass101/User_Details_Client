import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Nav from '../components/Nav'
import Signup from '../components/Signup'
const Index = () => {
  return (
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='/signup' element = {<Signup/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Index