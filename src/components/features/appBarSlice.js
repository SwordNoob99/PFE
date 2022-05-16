import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({

    name : "appBar" ,
    initialState : {
        isOpen : false
    },
    reducers : {
        changeState : (state , action ) => {

            state.isOpen = action.payload
        } ,
        
    }
})


export const {changeState} = navSlice.actions;
export const selectNav = (state) => state.isOpen;
export default navSlice.reducer;