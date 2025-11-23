// import React, { useState } from 'react'

// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { addUser } from '../utils/userSlice';
// import { useNavigate } from 'react-router-dom';
// import { BASE_URL } from '../utils/constant';


// const Login = () => {
//   const[email,setEmail]=useState("gaurav123@gmail.com");
// const[password,setPassword]=useState("Gaurav@123");
// const[error,setError]=useState("");
// const dispatch = useDispatch();
// const navigate=useNavigate();

// const handleLogin=async ()=>{
//   try {

//    const res= await axios.post( BASE_URL+ 'auth/login',{
//        emailId: email, 
//       password,
//     },{withCredentials:true});

//     //console.log(res.data);

//     dispatch(addUser(res.data));

//     return navigate("/");
//   } catch (error) {
//      setError(error?.response?.data||"Something went wrong");
//     // console.error(error);
//   }
// }

//   return (
//     <div className='flex justify-center items-center my-20 bg-base-200'>
//      <div className="card card-border bg-base-100 w-96" data-theme="dark">
//   <div className="card-body">
//     <h2 className="card-title justify-center">Login</h2>
    
//     <fieldset className="fieldset  input-bordered w-full">
//   <legend className="fieldset-legend">Email id </legend>
//   <input 
//   value={email}
//   type="text" 
//   className="input" 
//   placeholder="" 
//   onChange={(e)=>{
//     setEmail(e.target.value)
//     // console.log("Email:", e.target.value); 
//   }}
//   />
 
// </fieldset>
// <fieldset className="fieldset">
//   <legend className="fieldset-legend">Password</legend>
//   <input
//   value={password}
//    type="text"
//    className="input" 
//    placeholder="" 
//    onChange={(e)=>{
//     setPassword(e.target.value);
//    }}
//    />
//  <p className='text-red-500'>{error}</p>
// </fieldset>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary w-full mt-4" onClick={handleLogin}>Login</button>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react'

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';


const Login = () => {
  const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[firstName,setFirstName]=useState("");
const[lastName,setLastName]=useState("");
const[isLoginForm,setIsLoginForm]=useState(true);
const[error,setError]=useState("");
const dispatch = useDispatch();
const navigate=useNavigate();

const handlSignup=async ()=>{
  try {
    const res= await axios.post(BASE_URL+'auth/signup',
      {firstName,lastName,emailId:email,password},
      {withCredentials:true});
    //  console.log(res.data.data);
        dispatch(addUser(res.data.data));
      

// wait a moment so cookie attaches
setTimeout(() => {
  navigate("/profile");
}, 150);

  } catch (error) {
    setError(error?.response?.data||"Something went wrong");
  }
}

const handleLogin=async ()=>{
  try {

   const res= await axios.post( BASE_URL+ 'auth/login',{
       emailId: email, 
      password,
    },{withCredentials:true});

    //console.log(res.data);

    dispatch(addUser(res.data));

    return navigate("/");
  } catch (error) {
     setError(error?.response?.data||"Something went wrong");
    // console.error(error);
  }
}

  return (
    <div className='flex justify-center items-center min-h-screen bg-base-200 p-4'>
     <div className="card bg-base-100 w-96 shadow-xl border border-base-300 rounded-xl" data-theme="dark">
  <div className="card-body">
    <h2 className="card-title justify-center text-3xl font-bold mb-4">{isLoginForm ? "Login":"SignUp"}</h2>

    

   {!isLoginForm && (<><fieldset className="fieldset mb-2">
  <legend className="fieldset-legend font-semibold">First Name</legend>
  <input
  value={firstName}
   type="text"
   className="input input-bordered focus:outline-primary" 
   placeholder="First Name" 
   onChange={(e)=>{
    setFirstName(e.target.value);
   }}
   />
 <p className='text-red-500 text-sm mt-1'>{error}</p>
</fieldset>

    <fieldset className="fieldset mb-2">
  <legend className="fieldset-legend font-semibold">Last Name</legend>
  <input
  value={lastName}
   type="text"
   className="input input-bordered focus:outline-primary" 
   placeholder="First Name" 
   onChange={(e)=>{
    setLastName(e.target.value);
   }}
   />
 <p className='text-red-500 text-sm mt-1'>{error}</p>
</fieldset></>)}
    
    <fieldset className="fieldset input-bordered w-full mb-4">
  <legend className="fieldset-legend font-semibold">Email id </legend>
  <input 
  value={email}
  type="text" 
  className="input input-bordered focus:outline-primary" 
  placeholder="Enter your email" 
  onChange={(e)=>{
    setEmail(e.target.value)
    // console.log("Email:", e.target.value); 
  }}
  />
 
</fieldset>

<fieldset className="fieldset mb-2">
  <legend className="fieldset-legend font-semibold">Password</legend>
  <input
  value={password}
   type="password"
   className="input input-bordered focus:outline-primary" 
   placeholder="Enter your password" 
   onChange={(e)=>{
    setPassword(e.target.value);
   }}
   />
 <p className='text-red-500 text-sm mt-1'>{error}</p>
</fieldset>

    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full mt-4 text-lg" onClick={isLoginForm ? handleLogin : handlSignup}>{isLoginForm ? "Login" : "Signup"}</button>
    </div>

  <p  className="m-auto cursor-pointer py-2" onClick={() => setIsLoginForm((value) =>  !value)}>
  {isLoginForm? "New User? Signup Here" : "Existing User? Login Here"}
  </p>

  </div>
</div>
    </div>
  )
}

export default Login

