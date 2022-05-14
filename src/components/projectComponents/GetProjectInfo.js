import  "./GetProject.css";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Documents from "./Documents";
import Sharing from "./Sharing";
import Info from "./Info";
import axios from 'axios';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { useState } from 'react';
import Popup from "../popUpComponents/Popup";
import Project from "./Project";
import { IoReturnDownBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { RiFileInfoFill  } from "react-icons/ri";
  
  function createData(name, calories, fat, carbs, protein) {
  
    return { name, calories, fat, carbs, protein };
  }
  

 
class GetProjectInfo extends Component {
    
    
  state = {
    projects: [] ,
    isOpen : false ,
    navLoaded : false ,
    comp : 1
  }
  constructor(props) {
    super(props);
    
    this.setState.bind(this)
   
  }

 


    componentDidMount() {

      axios.get(`http://127.0.0.1:8082/api/v1/Project/projects`).then(
        res => {
           
            this.setState({ projects : res.data }, () => console.log(this.state.projects));
            
          
        },
    ).catch(error => {
      console.log(error)
    } )


          this.setState({
              navLoaded : true
          })

          

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


    <div className="component-container"  >

      

      <div className="component-nav">

      
      <div className="component-info">
      <IconContext.Provider value={{color : "#020624" , className : "component-info-icon" }}  >
                            
                                <RiFileInfoFill size={"70"} />
                             
                            
                                </IconContext.Provider >

      </div>
      <a  className="component-nav-icon">
      <IconContext.Provider value={{color : "white"}}>
                                <Link to="/">
                                <IoReturnDownBack size={"40"} />
                             
                                </Link>
                                </IconContext.Provider >
                            </a>
                            
      </div>

      <div className="page-info">
      <div className="project-component-nav" >

          <ul>

              <li>
              <button onClick={() => this.setState({comp : 1})}  type="button" className="btn btn-lg nav-button ">Infos</button>
                  
              </li>
              <li>
              <button onClick={() => this.setState({comp : 2})}  type="button" className="btn btn-lg nav-button ">Documents</button>
              </li>
              <li>
              <button onClick={() => this.setState({comp : 3})} type="button" className="btn btn-lg nav-button">Sharing</button>
              </li>
          </ul>

        

          {

              this.state.comp == 1 ? <Info /> : ''
          }

{

this.state.comp == 2 ? <Documents /> : ''
}


{

this.state.comp == 3 ? <Sharing /> : ''
}






</div>
    
</div>

</div>

  );
    }
}


export default GetProjectInfo;