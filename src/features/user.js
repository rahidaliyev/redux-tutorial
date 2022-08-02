import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({

    name: "user",
    initialState:{value:{ name: "", age: 0, email: "" } }, //this is syntax!!!
    reducers:{
      login: (state,action)=>{
         state.value=action.payload;
      },
    }


})

export const { login } = userSlice.actions; //added

export default userSlice.reducer;