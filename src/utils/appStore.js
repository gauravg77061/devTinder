import { configureStore } from "@reduxjs/toolkit";   
import userReducer from "./userSlice";
import feedReducer from "./feedSlice"
import Feed from "../components/feed";
import connectionReducer from "./connectionSlice"
import Connections from "../components/Connections";
import requestReducer from "./requestSlice"

// setup of redux store 

const appStore = configureStore({
 reducer:{
    user:userReducer,
    feed:feedReducer,
    connections:connectionReducer,
    request:requestReducer,
 },
});

export default appStore;