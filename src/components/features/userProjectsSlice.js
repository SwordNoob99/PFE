import { createSlice } from "@reduxjs/toolkit";

export const ProjectsSlice = createSlice({

    name : "userProjects" ,
    initialState : {
        projects : null 
        
    },
    reducers : {
        add : (state , action) => {

            state.userProjects = action.payload
        } ,
        remove : (state) => {
            state.userProjects = null

        }
    }
})


export const {add , remove } = ProjectsSlice.actions;
export const selectProjects = (state) => state.userProjects;

export default ProjectsSlice.reducer;