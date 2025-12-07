import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import BasePage from './components/basePage'
import Login from './components/login'
import {Provider} from "react-redux"
import Profile from './components/profile'
import appStore from './utils/appStore'
import Feed from './components/feed'
import Connections from './components/Connections'
import Request from './components/Request'
import axios from "axios";
import Premium from './components/Premium'
axios.defaults.withCredentials = true;

function App() {
 
//// adding redux store to all components available  at line number 2 -> provider 
  return (
    <>
       
      <Provider store={appStore}>
      <BrowserRouter basename='/'>

      <Routes>
        <Route path='/' element={<BasePage/>}>
         <Route path='/' element={<Feed/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
         <Route path='/connections' element={<Connections/>}/>
          <Route path='/requests' element={<Request/>}/>
           <Route path='/premium' element={<Premium/>}/>
        </Route>
      </Routes>

      </BrowserRouter>
      </Provider>
    
      
    </>
  )
}

export default App
