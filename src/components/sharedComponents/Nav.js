import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AIcons from "react-icons/ai";
import {SidebarData} from './SidebarData';
import { IconContext } from 'react-icons';
import { FiInfo } from "react-icons/fi";
import { RiLogoutBoxFill } from "react-icons/ri";
import { IoLogoGitlab } from "react-icons/io5";
import { Langauges , User } from './NavbarData';
import { Dropdown , DropdownButton , ButtonGroup } from 'react-bootstrap';


class Nav extends Component {
    constructor(props) {

        super(props);

        
        this.state = {
            sidebar : true
  
          } 

          this.showSideBar = this.showSideBar.bind(this)
        console.log(User)

    }



    shouldComponentUpdate(nextProps, nextState) {

        return true;

    }

    showSideBar(){

        this.setState({sidebar : this.state.sidebar})

     
    }

    

    render() {
        return (
            

            
   <>

   <IconContext.Provider value={{color : "white"}}>
        <div className='navbar'>
                
                <div className='header-nav'>
                <ul className='header-nav-menu-items' >
                    <li>
                    <a href='' >
                    <div className='user' >

                        <span>
                    {User.icon}
                    </span>
                    
                                    <span>
                                        {User.email}
                                    </span>
                        

                    </div>
                    </a>
                    </li>

                    <li>
                    <a href='' >
                    <div className='languages' >

                 
                        <img height='30px' src={Langauges[0].image}/>
                        <span>{Langauges[0].title}</span>

                        

                    </div>
                    </a>
                    </li>

                   

                   

                    
                    </ul>


                <Link to="#" className='header-nav-toggle'>

                    <FaIcons.FaBars onClick={this.showSideBar} />
                
                </Link>

                </div>
              

                <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>

                    <div className='wrapper'>
                <div onClick={this.showSideBar} className='logo' >
                       
                       <IoLogoGitlab size={80} className="logoIcon"/>

                    
                      
                   </div>
                    <ul className='nav-menu-items' >
                    <li>
                    
                    </li>

                   
                    {SidebarData.map((item , index) => {

                        return (

                           
                            <li onClick={this.showSideBar} key = {index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>
                                        {item.title}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}


                    <div  className='nav-text-log-out' >
                        <Link to="/" className='' style={{ textDecoration: 'none' , color:"white" }}>
                        <RiLogoutBoxFill />
                        <span>
                                        LogOut
                                    </span>
                     
                        </Link>
                    </div>

                    
                    </ul>
                    </div>

                  

                </nav>

        </div>

        </IconContext.Provider>
   
     </>
          
       

        );
    }
}

Nav.propTypes = {

};

export default Nav;