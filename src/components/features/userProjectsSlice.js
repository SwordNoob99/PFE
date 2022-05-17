import { createSlice } from "@reduxjs/toolkit";

export const ProjectsSlice = createSlice({

    name : "userProjects" ,
    initialState : {
        projects : null 
        
    },
    reducers : {
        add : (state , action) => {

            state.userProjects = action.payload
        } 
    }
})


export const {add } = ProjectsSlice.actions;
export const selectProjects = (state) => state.userProjects;

export default ProjectsSlice.reducer;