import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class Project extends Component {
    constructor()  {

        super();
        this.state = {
          projectName : '',
          description : '',
          image : ''
        }
    
        this.handleChange=this.handleChange.bind(this);
      }
    
    
      handleChange = event => {
    
        if(event.target.name == 'image'){
    
    
          let files = event.target.files;
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = (e) => {
                
              this.setState({
                  image: e.target.result,
                })
          }
        }else{
          
          const value = event.target.value;
        this.setState({ 
          ...this.state,
          [event.target.name]: value });
        
        }
    
        console.log(this.state.image)
      }
    
      handleSubmit = event => {
        event.preventDefault();
          console.log('we got here');
     
    
          
    
     
        axios.post(`http://127.0.0.1:8082/api/v1/Project/project`, { image : this.state.image ,
        name : this.state.projectName ,
        description : this.state.description })
          .then(res => {
            console.log(res);
            console.log(res.data);
          });
        }
      componentDidMount() {
  
          var data
    
          axios.get(`http://127.0.0.1:8082/api/v1/Project/projects`)
            .then(res => { console.log(res)
              
             
            })
            
        
        };

    render() {
        return (
            <div>
        <div className="page-header">
          <h3 className="page-title"> Add Project </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>basic features</a></li>
              <li className="breadcrumb-item active" aria-current="page">Project</li>
            </ol>
          </nav>
        </div>
        <div className="row">
         
         
          
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Project</h4>
               
                <form className="forms-sample"  onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Name</label>
                    <Form.Control value={this.state.projectName} type="text" className="form-control" id="exampleInputName1" placeholder="Name" name='projectName' onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleSelectGender">Lot De travaus</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>text</option>
                      <option>Female</option>
                    </select>
                  </Form.Group>
                
                    <Form.Group>
                    <label htmlFor="exampleSelectGender">Type de Construction</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>meuble</option>
                      <option>Female</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label>File upload</label>
                    <div className="custom-file">
                      <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es" name='image' onChange={this.handleChange}/>
                      <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputCity1">City</label>
                    <Form.Control type="text" className="form-control" id="exampleInputCity1" placeholder="Location" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleTextarea1">Textarea</label>
                    <textarea className="form-control" id="exampleTextarea1" name='description' rows="4" onChange={this.handleChange}></textarea>
                  </Form.Group>
                  <button type="submit" className="btn btn-primary mr-2" >Submit</button>
                  <button className="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
          
          
         
        </div>
      </div>
        );
    }
}

Project.propTypes = {

};

export default Project;