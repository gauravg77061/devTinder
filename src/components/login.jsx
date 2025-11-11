import React, { useState } from 'react'

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';


const Login = () => {
  const[email,setEmail]=useState("gaurav123@gmail.com");
const[password,setPassword]=useState("Gaurav@123");
const[error,setError]=useState("");
const dispatch = useDispatch();
const navigate=useNavigate();

const handleLogin=async ()=>{
  try {

   const res= await axios.post( BASE_URL+ 'auth/login',{
       emailId: email, 
      password,
    },{withCredentials:true});

    console.log(res.data);

    dispatch(addUser(res.data));

    return navigate("/");
  } catch (error) {
     setError(error?.response?.data||"Something went wrong");
    // console.error(error);
  }
}

  return (
    <div className='flex justify-center items-center my-20 bg-base-200'>
     <div className="card card-border bg-base-100 w-96" data-theme="dark">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    
    <fieldset className="fieldset  input-bordered w-full">
  <legend className="fieldset-legend">Email id </legend>
  <input 
  value={email}
  type="text" 
  className="input" 
  placeholder="" 
  onChange={(e)=>{
    setEmail(e.target.value)
    // console.log("Email:", e.target.value); 
  }}
  />
 
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input
  value={password}
   type="text"
   className="input" 
   placeholder="" 
   onChange={(e)=>{
    setPassword(e.target.value);
   }}
   />
 <p className='text-red-500'>{error}</p>
</fieldset>
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full mt-4" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
