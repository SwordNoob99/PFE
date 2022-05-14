import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './info.css'
import { IoMdAddCircle } from "react-icons/io";


import { IconContext } from "react-icons";
class Documents extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className='project-informations'>

            <div className='project-informations-title'>
             <h2>Add Document</h2>

             

            
            </div>

            <div className='add-icon'>
             <IconContext.Provider value={{color : "blue"  }}>
             <IoMdAddCircle size={80} className = "" />
             </IconContext.Provider>
             </div>

            <div className='project-form'>

          

             
            </div>


</div>
        );
    }
}

Documents.propTypes = {

};

export default Documents;