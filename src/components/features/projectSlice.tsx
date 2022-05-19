import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({

    name : "project" ,
    initialState : {
        fullProject : {
            selectedProject : null,
            documents : null ,
            collaborators : null ,
            meetings : null ,
            remarks : null ,
            observations : null,
            projectSelected : false

        }
       
    },
    reducers : {
        addProject : (state , action : any ) => {

            state.fullProject.selectedProject = action.payload
        
        },
        selectFirstProject : (state , action : any) => {

            state.fullproject.projectSelected = action.payload

        }
    }
})


export const {  selectFirstProject } = projectSlice.actions;
export const { addProject } = projectSlice.actions;
export const selectFullProject = (state) => state.project.fullProject;


export default projectSlice.reducer;