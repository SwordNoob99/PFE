import  "./GetProject.css";
import React, { Component } from 'react';
import PropTypes from 'prop-types';


import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import { useState } from 'react';
import Popup from "../popUpComponents/Popup";
import Project from "./Project";
import { IoCaretBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { RiFileInfoFill  } from "react-icons/ri";
  
  function createData(name, calories, fat, carbs, protein) {
  
    return { name, calories, fat, carbs, protein };
  }
  

 
class GetProjects extends Component {
    

  state = {
    projects: [] ,
    isOpen : false
  }
  constructor(props) {
    super(props);
    
   
  }


    componentDidMount() {

      axios.get(`http://127.0.0.1:8082/api/v1/Project/projects`).then(
        res => {
           
            this.setState({ projects : res.data }, () => console.log(this.state.projects));
            
          
        },
    ).catch(error => {
      console.log(error)
    } )


          

    }


    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }

   
    Open(){

    let  temp = this.state.isOpen;
      if (temp === true){
        temp = false ;
      }else {
        temp = true;
      }

      this.setState({ isOpen : temp })

    }



    render() {

      
       
  return (


    <div className="component-container col-12">

      <div className="component-info">
      <IconContext.Provider value={{color : "white" , className : "component-nav-icon" }}  >
                                <Link to="/">
                                <RiFileInfoFill size={"30"} />
                             
                                </Link>
                                </IconContext.Provider >

      </div>

      <div className="component-nav">
 
      <IconContext.Provider value={{color : "white" , className : "component-nav-icon" }}  >
                                <Link to="/">
                                <IoCaretBackSharp size={"30"} />
                             
                                </Link>
                                </IconContext.Provider >
                            
      </div>

    <table responsive className='table'>
  <thead>
    <tr align="center">
     <th align="center">Id</th>
     <th align="center">Name</th>
     <th align="center">Description</th>
     <th align="center">Action</th>
    </tr>
  </thead>
  <tbody>
  {this.state.projects.map((project) => (
            <tr key={project.id}>
             <td align="center">{project.id}</td>
              <td align="center">{project.name}</td>
              <td align="center">{project.description}</td>
              <td align="center"><Button variant="primary" onClick={this.Open.bind(this)}>Primary</Button></td>
            </tr>
          ))}
          

         { this.isOpen && <Popup
      content={  
      <Project></Project>}
      handleClose={this.Open}
    />
    }
  </tbody>
</table>

</div>

  );
    }
}


export default GetProjects;