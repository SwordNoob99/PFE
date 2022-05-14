import  "./GetProject.css";
import React, { Component } from 'react';
import PropTypes from 'prop-types';



import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import { useState } from 'react';



  
  function createData(name, calories, fat, carbs, protein) {
  
    return { name, calories, fat, carbs, protein };
  }
  

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

class GetProjects extends Component {
    

  state = {
    projects: []
  }
  constructor(props) {
    super(props);
    
   
  }
  
    componentWillMount() {

   


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

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {

      
       
  return (

    <Container>

    <table responsive className='table'>
  <thead>
    <tr>
      <th>#</th>
      {Array.from({ length: 5 }).map((_, index) => (
        <th key={index}>Table heading</th>
      ))}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 5 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>2</td>
      {Array.from({ length: 5 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>3</td>
      {Array.from({ length: 5 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
  </tbody>
</table>
</Container>
  );
    }
}


export default GetProjects;