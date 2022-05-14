import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Style.css';

class Popup extends Component {
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
        return  (
            <div className='popup-box'>

                <div className='box'>
                <span className="close-icon" onClick={this.props.handleClose}>x</span>
                             {this.props.content}
                </div>


            </div>
        ) ;
    }
}

Popup.propTypes = {

};

export default Popup;