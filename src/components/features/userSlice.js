import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({

    name : "user" ,
    initialState : {
        user : {
            user : null ,
            accessToken : null ,
            isLoggedIn : false
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
        }
    }
})


export const {login , logout} = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;