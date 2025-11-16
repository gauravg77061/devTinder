// import React,{useState}from 'react'
// import Card from './card';
// import { BASE_URL } from '../utils/constant';
// import { addUser } from '../utils/userSlice';
// import axios from "axios";
// import { useDispatch } from "react-redux";

// const EditProfile = ({user}) => {
//   const[firstName,setFirstName]=useState(user.firstName);
//   const[lastName,setLastName]=useState(user.lastName);
//   const[photoUrl,setPhotoUrl]=useState(user.photoUrl);
//   const[age,setAge]=useState(user.age);
//   const[about,setAbout]=useState(user.about);
//   const[gender,setGender]=useState(user.gender);
//   const[error,setError]=useState("");
//   const[showToast,setShowToast]=useState(false);

//   const dispatch=useDispatch();

//   const saveProfile = async ()=>{
//     setError("");
//     console.log("hello");
//     try {
//       const res=await axios.patch(
//         BASE_URL+"profile/edit",
//         {
//           firstName,
//           lastName,
//           photoUrl,
//           age,
//           gender,
//           about,
//         },
//         { withCredentials:true }
//       );
      
//       dispatch(addUser(res?.data?.data));
//       setShowToast(true);
//       setTimeout(()=>{
//         setShowToast(false);
//       },3000);
//     } catch (error) {
//       setError(error?.response?.data);
//     }
//   }

//   return (
//     <div className='flex justify-center my-10'>
//      <div className="flex justify-center mx-10" data-theme="dark">
// <div className="card bg-base-300 w-96 shadow-xl">
//     <div className="card-body">
//     <h2 className="card-title justify-center">Edit Profile </h2>
    
//     <fieldset className="fieldset  input-bordered w-full">
//   <legend className="fieldset-legend">First Name</legend>
//   <input 
//   value={firstName}
//   type="text" 
//   className="input" 
//   placeholder="" 
//   onChange={(e)=>{
//     setFirstName(e.target.value)
//     // console.log("Email:", e.target.value); 
//   }}
//   />
 
// </fieldset>
// <fieldset className="fieldset">
//   <legend className="fieldset-legend">Last Name</legend>
//   <input
//   value={lastName}
//    type="text"
//    className="input" 
//    placeholder="" 
//    onChange={(e)=>{
//     setLastName(e.target.value);
//    }}
//    />
// </fieldset>



// <fieldset className="fieldset">
//   <legend className="fieldset-legend">Photo Url</legend>
//   <input
//   value={photoUrl}
//    type="text"
//    className="input" 
//    placeholder="" 
//    onChange={(e)=>{
//     setPhotoUrl(e.target.value);
//    }}
//    />
// </fieldset>

// <fieldset className="fieldset">
//   <legend className="fieldset-legend">Age:</legend>
//   <input
//   value={age}
//    type="text"
//    className="input" 
//    placeholder="" 
//    onChange={(e)=>{
//     setAge(e.target.value);
//    }}
//    />
// </fieldset>


// <fieldset className="fieldset">
//   <legend className="fieldset-legend">Gender:</legend>
//   <input
//   value={gender}
//    type="text"
//    className="input" 
//    placeholder="" 
//    onChange={(e)=>{
//     setGender(e.target.value);
//    }}
//    />
// </fieldset>


// <fieldset className="fieldset">
//   <legend className="fieldset-legend">About:</legend>
//   <input
//   value={about}
//    type="text"
//    className="input" 
//    placeholder="" 
//    onChange={(e)=>{
//     setAbout(e.target.value);
//    }}
//    />
// </fieldset>

 


// <p className='text-red-500'>{error}</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary w-full mt-4" onClick={saveProfile} >Save Profile</button>
//     </div>
//   </div>

// </div>


// </div>

// <Card
//  user={{firstName,lastName,photoUrl,age,about,gender}}
// />

// {showToast && (
//         <div className="toast toast-top toast-center">
//           <div className="alert alert-success">
//             <span>Profile saved successfully.</span>
//           </div>
//         </div>
//       )}

//     </div>
//   )
// }

// export default EditProfile


import React, { useState } from 'react'
import Card from './card';
import { BASE_URL } from '../utils/constant';
import { addUser } from '../utils/userSlice';
import axios from "axios";
import { useDispatch } from "react-redux";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [gender, setGender] = useState(user.gender);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();

  const saveProfile = async () => {
    setError("");
    console.log("hello");
    try {
      const res = await axios.patch(
        BASE_URL + "profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      setError(error?.response?.data);
    }
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-10 my-10 px-6">
      
      {/* LEFT: Edit Form */}
      <div className="flex justify-center mx-10 w-full lg:w-[420px]" data-theme="dark">
        <div className="card bg-base-200 shadow-2xl w-full border border-base-300 rounded-2xl hover:shadow-primary/40 transition-all duration-300">
          <div className="card-body space-y-2">
            <h2 className="card-title justify-center text-xl font-semibold text-primary tracking-wide mb-4">Edit Profile</h2>

            <fieldset className="fieldset input-bordered w-full">
              <legend className="fieldset-legend text-sm font-medium text-gray-400">First Name</legend>
              <input
                value={firstName}
                type="text"
                className="input input-bordered w-full bg-base-100 focus:border-primary focus:ring focus:ring-primary/30 transition-all duration-200"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm font-medium text-gray-400">Last Name</legend>
              <input
                value={lastName}
                type="text"
                className="input input-bordered w-full bg-base-100 focus:border-primary focus:ring focus:ring-primary/30 transition-all duration-200"
                onChange={(e) => setLastName(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm font-medium text-gray-400">Photo URL</legend>
              <input
                value={photoUrl}
                type="text"
                className="input input-bordered w-full bg-base-100 focus:border-primary focus:ring focus:ring-primary/30 transition-all duration-200"
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm font-medium text-gray-400">Age</legend>
              <input
                value={age}
                type="text"
                className="input input-bordered w-full bg-base-100 focus:border-primary focus:ring focus:ring-primary/30 transition-all duration-200"
                onChange={(e) => setAge(e.target.value)}
              />
            </fieldset>

            {/*  Gender Dropdown */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm font-medium text-gray-400">Gender</legend>
              <select
                value={gender}
                className="select select-bordered w-full bg-base-100 focus:border-primary focus:ring focus:ring-primary/30 transition-all duration-200"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm font-medium text-gray-400">About</legend>
              <input
                value={about}
                type="text"
                className="input input-bordered w-full bg-base-100 focus:border-primary focus:ring focus:ring-primary/30 transition-all duration-200"
                onChange={(e) => setAbout(e.target.value)}
              />
            </fieldset>

            <p className='text-error text-sm font-medium'>{error}</p>

            <div className="card-actions justify-end">
              <button
                className="btn btn-primary w-full mt-4 hover:scale-[1.02] transition-all duration-300"
                onClick={saveProfile}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Live Preview Card */}
      <div className="flex justify-center w-full lg:w-[420px]">
        <Card user={{ firstName, lastName, photoUrl, age, about, gender }} />
      </div>

      {showToast && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-success shadow-lg rounded-md">
            <span>✅ Profile saved successfully.</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditProfile


