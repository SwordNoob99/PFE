import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    TextField
} from '@material-ui/core';
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from "react-router";
import CircularProgress from '@mui/material/CircularProgress';

export default function RegisterDialogForm ()  {
    const [formValues, setFormValues] = useState({
        preName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const[loading , setLoading] = useState(false);
    const [result, setResult] = useState();
    const [showRegisterForm, setShowRegisterForm] = useState(true);

    const onSubmit = (e) => {

        setLoading(true);
        e.preventDefault();
        console.log(formValues);
        axios.post(`http://127.0.0.1:8000/api/v1/register` , {
      'email' : formValues.email ,
      'password' : formValues.password ,
      'preName' : formValues.preName ,
      'lastName' : formValues.lastName
    }).then( res => {

        console.log(res)
        setResult(res.data.success)
        setLoading(false);
    }

    ).catch(error => {

        console.log(error)
    })
    };

    const handleInputChange = (e) => {
        const name = e.target.name;
        setFormValues({ ...formValues, [name]: e.target.value });
    };

    const handleClose = (event, reason) => {
        if (reason && reason == "backdropClick") 
            return;
     setShowRegisterForm(false);
    }

    return (
        <>

{!!result && (
        <Navigate
          to={{ pathname: "/login", state: { data: result } }}
        />
      )}
           { showRegisterForm && 
            <Dialog
                open={showRegisterForm}
                fullWidth
                onClose={ handleClose}
            >
                <DialogTitle>Register</DialogTitle>
                <DialogContent>
                <Dialog  PaperProps={{
    style: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  }} maxWidth="md" open={loading} >
   
        <DialogContent>
        {loading && <CircularProgress color="secondary" />} 
          
        </DialogContent>
      
      </Dialog>
                    <form onSubmit={onSubmit}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField
                                    label="firstName"
                                    type="text"
                                    required
                                    fullWidth
                                    name="preName"
                                    value={formValues.preName}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="lastName"
                                    type="text"
                                    required
                                    fullWidth
                                    name="lastName"
                                    value={formValues.lastName}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    type="email"
                                    name="email"
                                    required
                                    fullWidth
                                    value={formValues.email}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                         
                            <Grid item xs={12}>
                                <TextField
                                    label="Password"
                                    type="password"
                                    required
                                    name="password"
                                    fullWidth
                                    value={formValues.password}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" onClick={() => setShowRegisterForm(false)} disableElevation>
                                    Close
                                </Button>
                                <Button
                                    style={{ marginLeft: '15px' }}
                                    variant="contained"
                                    color="primary"
                                    type='submit'
                                    disableElevation
                                >
                                    Register
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
            

}
        </>
    );
};