import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({

    name : "project" ,
    initialState : {
        project : null ,
       
    },
    reducers : {
        add : (state , action) => {

            state.project = action.payload
        }
    }
})


export const {add } = projectSlice.actions;
export const selectProject = (state) => state.project;

export default projectSlice.reducer;