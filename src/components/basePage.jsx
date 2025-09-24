import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

const BasePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
     <Navbar/>
    <main className="flex-1">
    <Outlet />
  </main>
     <Footer/>
    </div>
  )
}

export default BasePage
