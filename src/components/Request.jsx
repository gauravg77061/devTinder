import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequest } from '../utils/requestSlice'

const Request = () => {

    const requests= useSelector((store)=>store.request);

    const dispatch=useDispatch();

    const reviewRequest=async(status,_id)=>{
      //  console.log(_id);

        try {
            
            const res=await axios.post(BASE_URL+"request/review/"+status+"/"+_id,{},{withCredentials:true});
            dispatch(removeRequest(_id));
        } catch (error) {
            console.log(error);
        }

    }

    const fetchRequest= async()=>{
        try {

         const res=await axios.get((BASE_URL+"user/request/recived"),{
            withCredentials:true,
        });

        console.log(res.data.data);

        dispatch(addRequests(res.data.data));

        
       } catch (error) {
        console.log(error);
       }
    }

    useEffect(()=>{
        fetchRequest();
    },[])

    if(!requests) return <div>no</div>;

    if(requests.length === 0) return <div><h2>No Requests</h2></div>

  return (
   <div className='text-center my-10'>
     <h1 className='font-bold text-3xl mb-10'>Your Request</h1>
     
     {requests.map((request)=>{
    const {firstName,lastName,photoUrl,age,gender,about} = request.fromUserId;

    return(
      <div 
        key={request._id} 
        className='flex items-center p-6 mb-6 bg-base-100 rounded-2xl shadow-xl border border-base-300 
        w-11/12 md:w-2/3 lg:w-1/2 mx-auto hover:shadow-2xl hover:scale-[1.03] transition-all duration-300'
      >
        
        <div className='mr-4'>
          <img  
            className='w-24 h-24 rounded-full object-cover border-2 border-primary shadow-lg'
            src={photoUrl} 
            alt="photo" 
          />
        </div>

        <div className='text-left ml-4 flex-1'>
         
         <h2 className='font-bold text-2xl mb-1'>
           {firstName+" "+lastName}
         </h2>

         <p className='opacity-80 text-sm mb-3'>
           {about}
         </p>

        {age && gender &&
          <p className='badge badge-outline p-3 text-sm mb-2'>
            {age +" • "+ gender}
          </p>
        }
       </div>

       <div className='flex flex-row gap-2'>
        <button className="btn btn-error w-24 btn-sm shadow-md hover:scale-105 transition-all" onClick={()=> reviewRequest('rejected',request._id)}>Reject</button>
        <button className="btn btn-success w-24 btn-sm shadow-md hover:scale-105 transition-all"  onClick={() =>reviewRequest('accepted',request._id)}>Accept</button>
       </div>

      </div>
    );

})}

    </div>
  )
}

export default Request
