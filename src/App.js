
import './App.css';

import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import User from './components/userComponents/user'
import NavbarComponent from './components/sharedComponents/NavComponent'
import MiniDrawer from './components/sharedComponents/MiniDrawer';
import Sidebar from './components/sharedComponents/SideBar';

import Project from './components/projectComponents/Project';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetProjectInfo from './components/projectComponents/GetProjectInfo';
import GetProjects from './components/projectComponents/GetProjects'
import Login from './components/accessComponents/Login';
import { selectUser } from './components/features/userSlice';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import TableProjects from './components/projectComponents/TableProjects';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

 const  user = useSelector(state => state.userReducer.user)
  const expand = useSelector(state => state.appBarReducer.isOpen)
  const projects = useSelector(state => state.userProjectsReducer.userProjects.projects)


  
  return (
    <>
    <Router>

    


 {



     user.isLoggedIn  ? 
      
    
    <div className={expand ? "container-scroller-expand" : "container-scroller " }>
    
        { < MiniDrawer />  }
      
        <div className="container-fluid page-body-wrapper ">
        
          <div className="main-panel">
          

            
          <Routes >
          <Route path="/">
          <Route index  element= { < TableProjects projects= {projects} />} > </Route>
            <Route  path='projects' element= { < TableProjects projects= {projects} />} > </Route>
            
         
             

        
         

            <Route path='project' element= { < GetProjectInfo />} ></Route>
                  
           
            <Route path="*" element={<Navigate to="/projects" replace />} />

        
                  
           
                  
                   

                  <Route path='/createProject' element= { < Project />} >
                  
                  
                  </Route>
                  </Route>
                  </Routes>
         
          
        
         
          </div>
        </div>
      
      </div> 


: 

<Routes>
<Route path='/login' element= { < Login />} > </Route>
<Route path='/projects' element= { < TableProjects />} > </Route>




</Routes>

} 
    </Router>
    </>
  );
}

export default App;
