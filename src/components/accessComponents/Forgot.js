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

export default function Forgot ()  {
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
     
        axios.post(`http://127.0.0.1:8000/api/v1/forgot` , {
      'email' : formValues.email ,
      
    }).then( res => {

        console.log(res)
        setLoading(false);
        setSubmitted(res.data.success)
        setResult(true)
        
    }

    ).catch(error => {

        console.log(error)
    })
    };
    const [ submitted , setSubmitted] = useState(false);

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
                <DialogTitle>Enter you email to recover password</DialogTitle>
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