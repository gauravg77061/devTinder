import io from "socket.io-client";
import { BASE_URL } from "./constant";

export const createSocketConnection = ()=>{
   // return io(BASE_URL);

   if(location.hostname === "localhost"){
    return io(BASE_URL);
   }
   else{
    return io("/", {path:"api/socket.io",
        withCredentials:true
    });
   }

}