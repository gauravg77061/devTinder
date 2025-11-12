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
  
      console.log(res.data);
  
      dispatch(addFeed(res.data));
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(()=>{
    getFeed();
  },[])

  return (
   feed&&( <div className='flex justify-center my-10'>
      <Card user={feed[0]}/>
    </div>)
  )
}

export default Feed
