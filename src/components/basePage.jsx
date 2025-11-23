import React, { useEffect } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const BasePage = () => {

  //changes karne ke liye 
  const dispatch=useDispatch();

  //for navigate 
const navigate =useNavigate();

// for fetching data from store 
const userData= useSelector((store)=>store.user);

// function to fetch user 
  const fetchUser=async()=>{
    // if user s present in store than don't call api ust fetch from store 
    if(userData) return ;
    try {
      const res= await axios.get(BASE_URL + 'profile/view',{
        withCredentials:true,
      });
      // set up of data
      dispatch(addUser(res.data));
    } catch (error) {
      
      // if token is not present or user is not loged in than give 401 error 
      if(error.status === 401){
        navigate('/login');
      }

      console.log(error);
    }
  }
// page load par login naa karna pade if token is there just from that we callthe user 
useEffect(() => {
  setTimeout(fetchUser, 150); // 150ms delay
}, []);


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
