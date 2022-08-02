import { createSlice } from '@reduxjs/toolkit'
const initialStateValue = { name: "", age: 0, email: "" };
export const userSlice = createSlice({

    name: "user",
    intialState:{initialStateValue},
    reducers:{
      login: (state,action)=>{
         state.value=action.payload;
      },
    }


})

export const { login } = userSlice.actions; //added

export default userSlice.reducer;