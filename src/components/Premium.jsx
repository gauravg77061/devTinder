import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constant'

const Premium = () => {

  const[isUserPremium,setIsUserPremium]=useState(false);

  useEffect(()=>{
    verifyPremiumUser()
  },[])

  const verifyPremiumUser = async ()=>{
    try {
      const res=await axios.get(BASE_URL+"payment/verify",
      {withCredentials:true}
    );
console.log(res.data.isPremium);
    if(res.data.isPremium === "true"){
      setIsUserPremium(true);
    }
      
    } catch (error) {
      console.log("Verify premium failed",err);
    }

  }

  const handleBuyClick=async (type)=>{
   //console.log(MembershipType);

   const order=await axios.post(
    BASE_URL+"payment/create",
    {
      memberShipType:type,
    },
    {withCredentials:true}
  );

const {amount,keyId,currency,notes,orderId}=await order.data;

   const options = {
    key: keyId,                   // Razorpay Key ID
    amount,                 // Amount in paise
    currency,
    name: "devTinder Premium",
    description: "Upgrade Membership",
    order_id: orderId,                   // ORDER ID from your backend
 
    prefill: {
      name: notes.firstName + " " + notes.lastName|| "User",
      email: notes.emailId || "test@gmail.com",
    },
    theme: {
      color: "#8b5cf6",
    },
   handler: async () => {
  setTimeout(() => {
    verifyPremiumUser();
  }, 2000); // wait for webhook
}
  };

  const razor = new window.window.Razorpay(options);
  razor.open();

  };

  return (
 <div >
  { isUserPremium ? ("You are already a premium User")  :(<div className="w-full flex flex-col items-center mt-10">
  <div className="flex flex-wrap gap-10 justify-center">

    {/* CARD 1 */}
    <div className="card w-80 bg-base-100 shadow-xl border border-base-300 hover:scale-105 transition-all duration-300">
      <div className="card-body">
        <span className="badge badge-warning mb-2">Most Popular</span>

        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Silver Membership</h2>
          <span className="text-lg font-semibold text-primary">₹1 / month</span>
        </div>

        <ul className="mt-6 flex flex-col gap-3 text-sm">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block text-success me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Blue Tick
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block text-success me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            100 Connection Requests/day
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block text-success me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Infinite chat
          </li>
        </ul>

        <div className="mt-6">
          <button onClick={()=>handleBuyClick("silver")} className="btn btn-primary w-full">Subscribe</button>
        </div>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="card w-80 bg-base-100 shadow-xl border border-base-300 hover:scale-105 transition-all duration-300">
      <div className="card-body">
        <span className="badge badge-warning mb-2">Most Popular</span>

        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Gold Membership</h2>
          <span className="text-lg font-semibold text-primary">₹10 / month</span>
        </div>

        <ul className="mt-6 flex flex-col gap-3 text-sm">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block text-success me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Blue Tick
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block text-success me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Infinte Requests/day
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block text-success me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Infinite chat
          </li>
        </ul>

        <div className="mt-6">
          <button  onClick={()=>handleBuyClick("gold")} className="btn btn-primary w-full">Subscribe</button>
        </div>
      </div>
    </div>

  </div>
</div>)}

    </div>
  )
}

export default Premium
