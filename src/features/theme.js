import { createSlice } from '@reduxjs/toolkit'
const initialStateValue="";
export const themeSlice = createSlice({

    name: "theme",
    initialState:{value: initialStateValue }, //this is syntax!!!
    reducers:{
      changeColor: (state,action)=>{
         state.value=action.payload;
      },
    
    },


})

export const {changeColor} = themeSlice.actions; //added

export default themeSlice.reducer;