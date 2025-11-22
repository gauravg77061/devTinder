import { createSlice } from "@reduxjs/toolkit";

const feedSlice=createSlice({
    name:'feed',
    initialState:null,
    reducers:{
        addFeed:(state,action)=>{
            return action.payload;
        },
        // state mein mere abhi tak ke saare use pade h 
        // mein compare kar raha hu har id ko with cation.payload 
        // actio.payload mein meri current id padi h
        removeFeed:(state,action)=>{
          const newArray=state.filter((user) => user._id !== action.payload);
          return newArray;
        }
    }
})

export const{addFeed,removeFeed}=feedSlice.actions;

export default feedSlice.reducer;