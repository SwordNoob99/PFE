import React, { Component } from 'react';
import axios from 'axios';
import ErrorBoundary from '../errors/ErrorBoundary';

class AllProjects extends Component {

    state = {
        data: []
      }

    constructor(props) {
        super(props);
        this.state = { hasError: true };
        axios.get(`http://127.0.0.1:8082/api/v1/Project/projects`).then(
            res => {
                const data = res.data;
                this.setState({ data });
            }
        )

        console.log(this.state.data)
       
      }
    
      static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(errorInfo)
      }
    

    componentDidMount() {
       

      

       
          

    }

    render() {

      
       
  return (
    <ErrorBoundary>
    
  </ErrorBoundary>
  );
    }
}



export default AllProjects;