import { createSlice } from "@reduxjs/toolkit";

// creating slice 
const userSlice=createSlice({
    name :'user',
    initialState:null,

    // adding reducres jo directly change kar dega values 
    // iskomeine call kiya store mein reducer mein

//     Login Button  → dispatch(addUser(userData))
//               ↓
//         Redux Store (userReducer)
//               ↓
//          state.user = { name: 'Gaurav' }
//               ↓
// Navbar (useSelector) → shows "Welcome, Gaurav!"
//               ↓
// Logout Button → dispatch(removeUser())
//               ↓
// Redux Store → state.user = null


    reducers:{
        // 1) state 
        //2) payload 
        addUser:(state,action) => {
            return action.payload;
        },
        removeUser:(state, action) =>{
            return null;
        }
    }
})

// extracting these actions 
export const{addUser,removeUser}=userSlice.actions;

// exporting this userslice so we change the state
export default userSlice.reducer;