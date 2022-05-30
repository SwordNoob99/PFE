import { createSlice , PayloadAction } from "@reduxjs/toolkit";

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
            projectSelected : null,
           

        }
       
    },
    reducers : {
        addProject : (state , action   ) => {

            state.fullProject.selectedProject = action.payload
            
        
        
        },
        selectFirstProject : (state , action  ) => {

            state.fullProject.projectSelected = action.payload

      

        },

        removeProject : (state) => {

            state.fullProject.selectedProject = null
        }
    }
})


export const {  selectFirstProject } = projectSlice.actions;
export const { addProject }  = projectSlice.actions ;
export const { removeProject }  = projectSlice.actions ;
export const selectFullProject = (state) => state.project.fullProject;


export default projectSlice.reducer;