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
          console.log('Nous allons là-bas');
     
    
          
    
     
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
          <h3 className="page-title"> Ajouter un projet </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Caractéristiques de base</a></li>
              <li className="breadcrumb-item active" aria-current="page">Projet</li>
            </ol>
          </nav>
        </div>
        <div className="row">
         
         
          
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Projet</h4>
               
                <form className="forms-sample"  onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Nom</label>
                    <Form.Control value={this.state.projectName} type="text" className="form-control" id="exampleInputName1" placeholder="Nom" name='projectName' onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleSelectGender">Lot De Travaux</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>Text</option>
                      <option>Document</option>
                    </select>
                  </Form.Group>
                
                    <Form.Group>
                    <label htmlFor="exampleSelectGender">Type de Construction</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>Meuble</option>
                      <option>Villa</option>
                      <option>Aéroport</option>
<option>Appartement</option>
<option>Atelier</option>
<option>Atelier d'artiste</option>
<option>Boulangerie</option>
<option>Boutique</option>
<option>Bureaux</option>
<option>Café</option>
<option>Centre administratif</option>
<option>Centre commercial</option>
<option>Centre culturel</option>
<option>Centre culturel</option>
<option>Centre d'appels</option>
<option>Centre de conférences</option>
<option>Centre de traitement</option>
<option>Cinéma</option>
<option>Clinique</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <label>File upload</label>
                    <div className="custom-file">
                      <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es" name='image' onChange={this.handleChange}/>
                      <label className="custom-file-label" htmlFor="customFileLang">Télécharger une image</label>
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputCity1">Ville</label>
                    <Form.Control type="text" className="form-control" id="exampleInputCity1" placeholder="Location" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleTextarea1">Zone de texte</label>
                    <textarea className="form-control" id="exampleTextarea1" name='description' rows="4" onChange={this.handleChange}></textarea>
                  </Form.Group>
                  <button type="submit" className="btn btn-primary mr-2" >Soumettre</button>
                  <button className="btn btn-light">Annuler</button>
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