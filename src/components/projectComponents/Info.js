import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { IoMdAddCircle } from "react-icons/io";


import { IconContext } from "react-icons";
import './info.css'

class Info extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

   
    shouldComponentUpdate(nextProps, nextState) {

    }



    render() {
        return (
            <div>
               <div className='project-informations'>

                   <div className='project-informations-title'>
                    <h2>Project Information</h2>

                   </div>

                   <div className='project-form'>

                    <div className='p-form-control'>
                   <input className="form-control form-control-lg project-form-control" type="text" placeholder="Project Name"></input>
                   <input className="form-control form-control-lg project-form-control" type="text" placeholder="Addresse"></input>
                   <input className="form-control form-control-lg project-form-control" type="text" placeholder="City"></input>
                   </div>

                   <div className='projectImage'>
                
                   <input className="form-control form-control-lg project-form-control-image" type="file" placeholder=".form-control-lg"></input>
                   </div>

                    
                   </div>


</div>

<div className='project-informations'>

                   <div className='project-informations-title'>
                    <h2>Project Members</h2>

                    

                   
                   </div>

                   <div className='add-icon'>
                   <a href='#'>
                    <IconContext.Provider value={{color : "blue"  }}>
                    <IoMdAddCircle size={80} className = "" />
                    </IconContext.Provider>
                    </a>
                    </div>
                   

                   <div className='project-form'>

                 

                    
                   </div>


</div>

<div className='project-informations'>

                   <div className='project-informations-title'>
                    <h2>Work Packages</h2>
               
                   </div>

                   <div className='add-icon'>
                       <a href='#'>
                    <IconContext.Provider value={{color : "green"  }}>
                    <IoMdAddCircle size={80} className = "" />
                    </IconContext.Provider>
                    </a>

                    </div>

                   <div className='project-form'>

                    

                    
                   </div>


</div>
            </div>
        );
    }
}

Info.propTypes = {

};

export default Info;