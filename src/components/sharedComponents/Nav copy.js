import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import logo from '../../assets/images/logo.png'
class Nav extends Component {
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
            <div>
          
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark col-10">
                  <div className="container-fluid">
         
                <a href="#" className="navbar-brand">
                    <img src={logo} height="28" alt="CoolBrand"></img>
                </a>
                <button type="button" className="navbar-toggler" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                       <div className='row'>
                        <a href="#" className="nav-item nav-link active col">Projects</a>
                        <a href="#" className="nav-item nav-link col">Plans</a>
                        <a href="#" className="nav-item nav-link col">Planning</a>
                        <a href="#" className="nav-item nav-link col">Meetings</a>
                        <a href="#" className="nav-item nav-link col">Remarks</a>
                        <a href="#" className="nav-item nav-link col">Issues</a>
                        <a href="#" className="nav-item nav-link col ">Reports</a>
                        </div>
                    </div>
                     {/* <div class="navbar-nav ms-auto">
                        <a href="#" class="nav-item nav-link">Login</a>
                    </div> */}
                </div>
                </div>
                </nav>

                
<div className="sideBar col-2 ">
something in here
</div>
           </div>
             
    
         
          
       

        );
    }
}

Nav.propTypes = {

};

export default Nav;