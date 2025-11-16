import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice';
import Card from './card';
const Feed = () => {


const dispatch=useDispatch();

const feed = useSelector((store) => store.feed);
  const getFeed =async()=>{
    if(feed) return ;
    try {
      const res=await axios.get(BASE_URL+'user/feed',{
       withCredentials:true
      });
  
      console.log(res?.data);
  
      dispatch(addFeed(res?.data));
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(()=>{
    getFeed();
   // console.log("hello")
  },[])

  return (
    
   <div>
   {feed && feed.length > 0 ? (
        <div className='flex justify-center my-10'>
          {/* Card component will receive the first feed item */}
        
          <Card user={feed[0]} />
        </div>
      ) : (
        <div>
          <p className="text-gray-400 text-lg">No feed is there</p>
        </div>
      )}
   </div>
  
  )
}

export default Feed
