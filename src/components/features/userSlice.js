import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({

    name : "user" ,
    initialState : {
        user : {
            user : null ,
            accessToken : null ,
            isLoggedIn : false ,
            justLoggedIn : false
        }
    },
    reducers : {
        login : (state , action) => {

            state.user = action.payload
        } ,
        logout : (state) => {
            state.user.user = null;
            state.user.accessToken = null;
            state.user.isLoggedIn = false;
        } ,
        justLogged : (state , action) => {
            state.justLoggedIn = action.payload
        }
    }
})


export const {login , logout , justLogged} = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;