import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createSocketConnection } from '../utils/socket';
import {useSelector} from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constant';
const Chat = () => {

    const{targetUserId}=useParams();
  //const [socket, setSocket] = useState(null);
const[messages,setMessages]=useState([]);
const[newMessage,setNewMessage]=useState("");
const user=useSelector(store => store.user);
const userId=user?._id;
//  console.log(userId,targetUserId);

const fetchChatMessages=async ()=>{
   const chat = await axios.get(BASE_URL+`chat/${targetUserId}`,{withCredentials:true});

   //console.log(chat.data.messages);

   const chatMessages=chat?.data?.messages.map((msg) =>{
    return{
      firstName:msg?.senderId?.firstName,
      lastName:msg?.senderId?.lastName,
      textMessage:msg.text,
     time:msg?.createdAt
    }
   })
setMessages(chatMessages)
}

useEffect(()=>{
  fetchChatMessages();
},[])

useEffect(()=>{

    //if there is no user return dont create socket connection

    if(!userId || !user.firstName){
        return ;
    }

    // create connection through configuration
    const socket =createSocketConnection();

   

    //emiting event 
    socket.emit("joinChat",{firstName:user.firstName,lastName:user.lastName,userId,targetUserId});

    // ye client par message recived 
    socket.on("messageRecived",({firstName,lastName,textMessage}) => {
       // console.log(firstName+" "+textMessage)
        setMessages((messages)=>[...messages,{firstName,lastName,textMessage}])
    })

    //always disconnect socket when page unmount
    return ()=>{
        socket.disconnect();
    }

},[targetUserId,userId])

const formatChatTime = (isoTime) => {
  if (!isoTime) return "";

  const date = new Date(isoTime);
  const now = new Date();

  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  if (isToday) {
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};


const sendMessage =()=>{
    if (!user ) return;
    const socket= createSocketConnection();
    //console.log(user.firstName);
    socket.emit("sendMessage",{firstName:user.firstName,lastName:user.lastName,userId,targetUserId,textMessage:newMessage})

    setNewMessage("");
    
}

  return (
    <div>
       <div className="w-full md:w-1/2 mx-auto my-6 h-[75vh] flex flex-col 
                  bg-base-100 rounded-2xl shadow-2xl 
                  border border-base-300 overflow-hidden">

    {/* Header */}
    <div className="p-4 border-b border-base-300 flex items-center justify-between bg-base-200">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary text-white 
                        flex items-center justify-center font-bold">
          💬
        </div>
        <div>
          <h1 className="text-lg font-bold">Chit Chat</h1>
          <p className="text-xs text-success">● Online</p>
        </div>
      </div>
    </div>

    {/* Messages Area */}
   <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-base-200">
                {
                    messages.map((msg,index)=>{
                        return(
                            <div key={index}className={
                              "chat  " +
                              (user?.firstName === msg.firstName ? "chat-end":"chat-start")

                            }>
                            <div className="chat-header">
                                {/* {msg.firstName} */}
                               { `${msg.firstName} ${msg.lastName}`}
                                <time className="text-xs opacity-50">{formatChatTime(msg.time)}</time>
                            </div>
                            <div className="chat-bubble">{msg.textMessage}</div>
                           
                              <div className='chat-footer opacity-50'>Seen</div>
                            
                            </div>
                        );
                    })
                }
   </div>

    {/* Input Area */}
    <div className="p-4 border-t border-base-300 flex items-center gap-3 bg-base-100">
      <input
       
       value={newMessage}
       onChange={(e) =>setNewMessage(e.target.value)}

        type="text"
        placeholder="Type your message..."
        className="input input-bordered flex-1 rounded-full 
                   focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        onClick={sendMessage}
        className="btn btn-primary rounded-full px-6 shadow-md"
      >
        Send 🚀
      </button>
    </div>

  </div>
    </div>
  )
}

export default Chat
