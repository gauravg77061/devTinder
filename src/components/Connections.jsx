import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import {connect, useDispatch, useSelector} from "react-redux";
import { addConnections } from '../utils/connectionSlice';
const Connections = () => {
  const connections = useSelector((store)=>store.connections);
  const dispatch=useDispatch();

  const fetchConnectons= async ()=>{
   try {

    const res= await axios.get(BASE_URL+"user/connections",{
      withCredentials:true,
    });

   //console.log(res.data.data);
    dispatch(addConnections( res.data.data));
   } catch (error) {
    // Handle errr 
   }
  }

  useEffect(()=>{
    fetchConnectons();
  },[])
console.log(connections);

  if(!connections) return ;

  if(connections.length === 0) return <div> <h2>No Connections Found</h2></div>

  return (
    <div className='text-center my-10'>
     <h1 className='font-bold text-3xl mb-10'>Your Connections</h1>
     
     {connections.map((connection)=>{
    const {firstName,lastName,photoUrl,age,gender,about} = connection;

    return(
      <div 
        key={connection._id} 
        className='flex items-center p-6 mb-6 bg-base-100 rounded-2xl shadow-xl border border-base-300 
        w-11/12 md:w-2/3 lg:w-1/2 mx-auto hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer'
      >
        
        {/* Profile Photo */}
        <div>
          <img  
            className='w-24 h-24 rounded-full object-cover border-2 border-primary shadow-lg'
            src={photoUrl} 
            alt="photo" 
          />
        </div>

        {/* Info Section */}
        <div className='text-left ml-6'>
         
         <h2 className='font-bold text-2xl mb-1'>
           {firstName+" "+lastName}
         </h2>

         <p className='opacity-80 text-sm mb-2'>
           {about}
         </p>

        {age && gender &&
          <p className='badge badge-outline p-3 text-sm'>
            {age +" • "+ gender}
          </p>
        }
       </div>

      </div>
    );

})}

    </div>
  )
}

export default Connections
