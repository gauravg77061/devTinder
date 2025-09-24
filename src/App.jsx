import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import BasePage from './components/basePage'
import Login from './components/login'

import Profile from './components/profile'

function App() {
 

  return (
    <>
      
      <BrowserRouter basename='/'>

      <Routes>
        <Route path='/' element={<BasePage/>}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        </Route>
      </Routes>

      </BrowserRouter>
    
      
    </>
  )
}

export default App
