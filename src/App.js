
import './App.css';

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import User from './components/userComponents/user'
import NavbarComponent from './components/sharedComponents/NavComponent'
import Nav from './components/sharedComponents/Nav';
import Sidebar from './components/sharedComponents/SideBar';

import Project from './components/projectComponents/Project';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetProjectInfo from './components/projectComponents/GetProjectInfo';
import GetProjects from './components/projectComponents/GetProjects'
import Login from './components/accessComponents/Login';

function App() {


 

  
  return (
    <>
    <Router>
    <div className="container-scroller ">
    
        { < Nav />  }
      
        <div className="container-fluid page-body-wrapper ">
        
          <div className="main-panel">
          

            
              <Routes>
           
            <Route path='/projects' element= { < GetProjects />} >
                  
           
            </Route>

            <Route path='/login' element= { < Login />} >
                  
           
            </Route>


            <Route path='/project' element= { < GetProjectInfo />} >
                  
           
                  </Route>

            <Route path='/sideBar' element= { < Sidebar />} >
                  
           
                  </Route>

                  <Route path='/createProject' element= { < Project />} >
                  
           
                  </Route>
            </Routes>
          
        
         
          </div>
        </div>
      
      </div>
    </Router>
    </>
  );
}

export default App;
