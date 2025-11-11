import { configureStore } from "@reduxjs/toolkit";   
import reducer from "./userSlice";

// setup of redux store 

const appStore = configureStore({
 reducer:{
    user:reducer,
 },
});

export default appStore;